import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../../services/pedido/pedido.service';
import { MenuService } from '../../services/menu/menu.service';
import { AuthService } from '../../services/auth/auth.service';
import { User } from '../../models/user';
import { Mesa } from '../../models/mesa';
import { MesaService } from '../../services/mesa/mesa.service';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-carga-pedido',
  templateUrl: './carga-pedido.page.html',
  styleUrls: ['./carga-pedido.page.scss'],
})
export class CargaPedidoPage {
  mesas: Mesa[] = [];
  menus: Menu[] = [];
  menus_cargados: Menu[] = [];
  usuario: User;
  mesa: string;
  cliente: string;

  constructor(
    private navCtrl: NavController,
    private pedidoService: PedidoService,
    private menuService: MenuService,
    private mesaService: MesaService,
    private auth: AuthService
  ) {
    this.usuario = this.auth.getUserInfo();
  }

  ionViewWillEnter() {
    this.traerMenus();
    this.traerPedidos();
    this.mesaService.Listar().subscribe(
      (res) => {
        this.mesas = res.filter((mesa) => {
          return mesa.estado == 'Cerrada';
        });
      }
    )
  }

  traerPedidos() {
    this.pedidoService.ListarActivosPorSector().subscribe(
      (res) => {
        console.log(res);
      });
  }

  traerMenus() {
    this.menuService.Listar().subscribe(
      (res) => {
        res.forEach(menu => {
          switch (menu.nombre) {
            case "Vino":
              menu.icon = 'wine';
              break;
            case "Jugo de Naranja":
              menu.icon = 'cafe';
              break;
            case "Cerveza":
              menu.icon = 'beer';
              break;
            case "Pizza Muzzarella":
              menu.icon = 'pizza';
              break;
            case "Milanesa a la Napolitana":
              menu.icon = 'restaurant';
              break;
            case "Empanadas":
              menu.icon = 'restaurant';
              break;
            case "Canelones":
              menu.icon = 'restaurant';
              break;
            default:
              menu.icon = '';
              break;
          }
        });
        this.menus = res;
      });
  }

  agregarMenu(id: number) {
    let index = this.menus.findIndex(x => x.id == id);
    this.menus_cargados.push(this.menus[index]);
    this.menus_cargados = this.menus_cargados.sort((a: Menu, b: Menu) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      return 0;
    });
  }

  eliminarMenu(id: number) {
    let index = this.menus_cargados.findIndex(x => x.id == id);
    this.menus_cargados.splice(index, 1);
  }

  generarPedido() {
    if (this.mesa != "" && this.cliente != "") {
      this.menus_cargados.forEach((menu) => {
        this.pedidoService.Registrar(this.mesa, menu.id, this.cliente).then(
          (res) => this.traerPedidos()
        );
      });
    }
  }

  atras() {
    this.navCtrl.pop();
  }
}
