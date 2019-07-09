import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { MenuService } from '../../../services/menu/menu.service';
import { AuthService } from '../../../services/auth/auth.service';
import { Mesa, EstadosMesa } from '../../../models/mesa';
import { MesaService } from '../../../services/mesa/mesa.service';
import { Menu } from '../../../models/menu';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-carga-pedido',
  templateUrl: './carga-pedido.page.html',
  styleUrls: ['./carga-pedido.page.scss'],
})

export class CargaPedidoPage {
  mesas: Mesa[] = [];
  menus: Menu[] = [];
  menus_cargados: any[] = [];
  usuario: any;
  mesa: string;
  cliente: string;
  total: number = 0;

  constructor(
    private navCtrl: NavController,
    private pedidoService: PedidoService,
    private menuService: MenuService,
    private mesaService: MesaService,
    private auth: AuthService,
    private errorHandler: ToastService,
    private clienteService: ClienteService
  ) {
    this.usuario = this.auth.token();
  }

  ionViewWillEnter() {
    if (this.usuario.tipo == 'registrado' || this.usuario.tipo == 'anonimo') {
      this.clienteService.GetCliente(this.usuario.id).subscribe(cliente => {
        if (cliente.mesa) {
          this.mesa = cliente.mesa;
          this.traerMenus();
        } else {
          this.errorHandler.errorToast('Debe estar ingresado en una mesa para realizar pedidos');
          this.navCtrl.navigateForward('/home');
        }
      });
    } else {
      this.mesaService.Listar().subscribe(
        (res) => {
          this.mesas = res.filter((mesa) => {
            return mesa.estado != EstadosMesa.Cerrada;
          });
          if (this.mesas.length == 0) {
            this.errorHandler.errorToast('Todas las mesas están vacias');
            this.atras();
          } else {
            this.traerMenus();
          }
        }
      )
    }
  }

  traerMenus() {
    this.menuService.Listar().subscribe(
      (res) => {
        this.menus = res;
      });
  }

  agregarMenu(menu: Menu) {
    this.total += menu.precio;
    let index = this.menus_cargados.findIndex(x => x['menu'].id == menu.id);
    if (index > -1) {
      this.menus_cargados[index]['cantidad']++;
    } else {
      this.menus_cargados.push({
        'menu': menu,
        'cantidad': 1
      });
    }
  }

  eliminarMenu(menu: Menu) {
    this.total -= menu.precio;
    let index = this.menus_cargados.findIndex(x => x['menu'].id == menu.id);
    if (this.menus_cargados[index]['cantidad'] > 1) {
      this.menus_cargados[index]['cantidad']--;
    } else {
      this.menus_cargados.splice(index, 1);
    }
  }

  generarPedido() {
    if (this.mesa != "") {
      let mozo = this.usuario.tipo == 'Mozo' ? this.usuario.id : 0;
      if (this.cliente) {
        this.menus_cargados.forEach((item) => {
          for (let i = 0; i < item.cantidad; i++) {
            this.guardarPedido(this.mesa, item.menu.id, this.cliente, 0, mozo);
          }
        });
        this.mesaService.CambiarEstado(this.mesa, EstadosMesa.EsperandoPedido)
          .then(
            () => {
              this.errorHandler.confirmationToast('Pedido registrado!');
              this.navCtrl.navigateForward('/home');
            }
          );
      } else {
        this.clienteService.GetClientedeMesa(this.mesa).subscribe(cliente => {
          if (cliente != undefined) {
            this.menus_cargados.forEach((item) => {
              this.guardarPedido(this.mesa, item.menu.id, cliente.usuario, 0, mozo);
            });
            this.mesaService.CambiarEstado(this.mesa, EstadosMesa.EsperandoPedido)
              .then(
                () => {
                  this.errorHandler.confirmationToast('Pedido registrado!');
                  this.navCtrl.navigateForward('/home');
                }
              );
          } else {
            this.errorHandler.errorToast('Error al cargar el pedido')
          }
        });
      }
    }
  }

  guardarPedido(mesa, menu, cliente, es_delivery, mozo) {
    this.pedidoService.Registrar(mesa, menu, cliente, es_delivery, mozo)
      .then(
        (res: any) => {
          if (res.Estado != 'OK') {
            this.errorHandler.errorToast(res.Mensaje);
          }
        }
      )
      .catch(
        (e) => this.errorHandler.errorToast(e)
      )
  }

  atras() {
    this.navCtrl.navigateForward('/home')
  }
}
