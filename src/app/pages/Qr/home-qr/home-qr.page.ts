import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EsperaService } from 'src/app/services/espera/espera.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { Mesa, EstadosMesa } from 'src/app/models/mesa';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-home-qr',
  templateUrl: './home-qr.page.html',
})
export class HomeQrPage implements OnInit {

  listadoMesas: Mesa[] = [];
  mesa: any;
  cliente: Cliente;
  usuarioOnline: any;
  listadoIconos: Array<any> = [
    {
      nombre: "Tomar Mesa",
      accion: "mesa"
    },
    {
      nombre: "Lista de espera",
      accion: "espera"
    },
  ]

  constructor(private errorHandler: ToastService,
    private navCtrl: NavController,
    public esperaServicio: EsperaService,
    private barcodeScanner: BarcodeScanner,
    private clienteService: ClienteService,
    private menuService: MenuService,
    private pedidoService: PedidoService,
    private servicioMesa: MesaService,
    private authService: AuthService) {
    this.mesa = new Mesa();
    this.cliente = new Cliente();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    this.cliente.id = this.usuarioOnline.id;
    console.log(this.usuarioOnline);
    this.scanQr();
    this.cargarMesas();

  }

  Accion(qr: string) {
    if (qr == 'LISTA DE ESPERA') {
      this.esperaServicio.alta(this.usuarioOnline).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
          console.log(data);
          this.volver();
        }, (error) => {
          console.error(error);
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
          this.volver();
        });
    } else if (qr.indexOf('MESA-') > -1) {
      if (this.verificarMesa(qr.replace('MESA-', ''))) {
        this.usuarioOnline.mesa = qr.replace('MESA-', '');
        this.clienteService.CargarMesa(this.usuarioOnline).
          subscribe((data) => {
            this.errorHandler.confirmationToast(data["Mensaje"]);
            this.volver();
          }, (error) => {
            this.errorHandler.errorToast(error);
            this.volver();
          });
      } else {
        this.errorHandler.errorToast("Esta mesa no esta libre");
        this.volver();
      }
    } else {
      this.menuService.GetMenu(qr).subscribe(menu => {
        if (menu && this.usuarioOnline.tipo == 'registrado') {
          this.clienteService.GetCliente(this.usuarioOnline.id).subscribe(cliente => {
            if (cliente.mesa) {
              this.pedidoService.Registrar(cliente.mesa, menu.id, cliente.nombre, 0, 0)
                .then(
                  (res: any) => {
                    if (res.Estado == 'OK') {
                      this.errorHandler.confirmationToast('Pedido registrado!');
                      this.servicioMesa.CambiarEstado(cliente.mesa, EstadosMesa.EsperandoPedido);
                      this.volver();
                    } else {
                      this.errorHandler.errorToast(res.Mensaje);
                      this.volver();
                    }
                  }
                )
                .catch(
                  (e) => {
                    this.errorHandler.errorToast(e);
                    this.volver();
                  }
                )
            } else {
              this.errorHandler.errorToast('Debe estar ingresado en una mesa para realizar pedidos');
              this.volver();
            }
          });
        } else {
          this.errorHandler.errorToast("No es un Qr valido");
          this.volver();
        }
      });
    }
  }

  scanQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.Accion(barcodeData.text.toUpperCase());
    }).catch(e => {
      this.errorHandler.errorToast(e);
      this.volver();
    });
  }

  cargarMesas() {
    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
      });

  }

  verificarMesa(codigo_mesa: string) {
    let respuesta = false;
    this.mesa = this.listadoMesas.filter(function(listado) {return listado.codigo == codigo_mesa})[0]
    if (this.mesa.estado == "Cerrada") {
      respuesta = true;
    }
    return respuesta
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }
}
