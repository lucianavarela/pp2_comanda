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
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-home-qr',
  templateUrl: './home-qr.page.html',
})
export class HomeQrPage implements OnInit {

  reservas: any;
  listadoMesas: Mesa[] = [];
  listadoReservas: Reserva[] = [];
  mesa: any;
  cliente: Cliente;
  usuarioOnline: any;
  myDate = new Date();
  hora1 = new Date('2019-06-28 12:20:00');
  hora2 = new Date('2019-06-28 13:00:00');
  flag: boolean = false;

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
    private servicioMesa: MesaService,
    private servicioReserva: ReservaService,
    private menuService: MenuService,
    private pedidoService: PedidoService,
    private authService: AuthService) {
    this.mesa = new Mesa();
    this.cliente = new Cliente();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    this.cliente.id = this.usuarioOnline.id;
    this.scanQr();
    this.cargarMesas();

  }

  Accion(qr: string) {
    if (qr == 'LISTA DE ESPERA') {
      this.esperaServicio.alta(this.usuarioOnline).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
          this.volver();
        }, (error) => {
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
          this.volver();
        });
    } else if (qr.indexOf('MESA-') > -1) {
      this.verificarReserva(qr.replace('MESA-', ''));
      if (this.flag == false) {
        this.usuarioOnline.mesa = qr.replace('MESA-', '');
        this.clienteService.CargarMesa(this.usuarioOnline).
          subscribe((data) => {
            if(data["Estado"]=="OK"){
              this.errorHandler.confirmationToast(data["Mensaje"]);
              this.servicioMesa.CambiarEstado(this.usuarioOnline.mesa, EstadosMesa.Asignada);
              this.volver();
            }else{
              this.errorHandler.confirmationToast(data["Mensaje"]);
              this.volver();
            }
            
          }, (error) => {
            this.errorHandler.errorToast(error);
            this.volver();
          });
      } else {
        this.errorHandler.errorToast("Esta mesa no esta libre");
        this.volver();
      }
    } else if (qr.indexOf('PROPINA-') > -1) {
      if (this.usuarioOnline.tipo == 'registrado' || this.usuarioOnline.tipo == 'anonimo') {
        this.clienteService.GetCliente(this.usuarioOnline.id).subscribe(cliente => {
          if (cliente.mesa) {
            if (cliente.mesa != null) {
              if (this.verificarMesaComiendo(cliente.mesa) || cliente.mesa == 'MES00') {
                this.servicioMesa.CambiarEstado(cliente.mesa, EstadosMesa.Pagando)
                  .then(
                    () => {
                      this.errorHandler.confirmationToast("Gracias por su propina de " + (qr.replace('PROPINA-', '') + '%!'));
                      this.volver();
                    }
                  ).catch(
                    (e) => this.errorHandler.errorToast(e)
                  )
              } else {
                this.errorHandler.errorToast("Aún quedan pedidos pendientes");
                this.volver();
              }
            } else {
              this.errorHandler.errorToast("Usted no tiene pedidos activos");
              this.volver();
            }
          } else {
            this.errorHandler.errorToast("Usted no esta habilitado a dejar propina");
            this.volver();

          }
        })
      } else {
        this.errorHandler.errorToast("Usted no esta habilitado a dejar propina");
        this.volver();
      }
    } else {
      this.menuService.GetMenu(qr).subscribe(menu => {
        if (menu && this.usuarioOnline.tipo == 'registrado') {
          this.clienteService.GetCliente(this.usuarioOnline.id).subscribe(cliente => {
            if (cliente.mesa) {
              this.pedidoService.Registrar(cliente.mesa, menu.id, cliente.usuario, 0)
                .then(
                  res => {
                    this.errorHandler.confirmationToast('Pedido registrado!');
                    this.servicioMesa.CambiarEstado(cliente.mesa, EstadosMesa.EsperandoPedido);
                    this.volver();
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
      this.Accion(barcodeData.text.toUpperCase());
    }).catch(e => {
      this.errorHandler.errorToast(e);
      this.volver();
    });
  }


  verificarReserva(codigo: string) {
    let respuesta = false;
    let reservas = this.listadoReservas.filter(function (reserva) { return reserva.codigo_mesa == codigo })
    if (this.myDate > this.hora1 && this.hora2 < this.hora2) {
      let tiempo;
      let diferencia;
      if (reservas.length > 0) {
        reservas.forEach(reserva => {
          let horaR = new Date(reserva.fecha.substr(0, 10) + " " + reserva.hora)
          tiempo = this.myDate.getTime() - horaR.getTime();
          diferencia = Math.floor((tiempo / 1000 / 60) << 0)
          if (diferencia < 40) {
            respuesta = true;
          }
        });
      }
    }

    return respuesta;
  }

  cargarMesas() {
    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
      });
  }

  cargarReservas() {
    this.servicioReserva.Listar().subscribe(
      (res) => {
        this.listadoReservas = res;
      });
  }

  verificarMesaCerrada(codigo_mesa: string) {
    let respuesta = false;
    let mesa = this.listadoMesas.filter(function (listado) { return listado.codigo == codigo_mesa })[0]
    if (mesa.estado == EstadosMesa.Cerrada) {
      respuesta = true;
    }
    return respuesta
  }

  verificarMesaComiendo(codigo_mesa: string) {
    let respuesta = false;
    let mesa = this.listadoMesas.filter(function (listado) { return listado.codigo == codigo_mesa })[0]
    if (mesa.estado == EstadosMesa.Comiendo) {
      respuesta = true;
    }
    return respuesta
  }

  volver() {
    this.navCtrl.navigateForward('/home');
  }
}
