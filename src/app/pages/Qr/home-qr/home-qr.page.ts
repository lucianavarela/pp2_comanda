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
  styleUrls: ['./home-qr.page.scss'],
})
export class HomeQrPage implements OnInit {

  reservas: any;
  listadoMesas: Mesa[] = [];
  listadoReserva: any;
  mesa: any;
  cliente: Cliente;
  usuarioOnline: any;
  myDate = new Date();
  myDate1 = new Date().toISOString().substring(0, 10);

  hora1 = new Date(this.myDate1 + " " + "00:00:00");
  hora2 = new Date(this.myDate1 + " " + "04:00:00");

  flag: boolean = false;
  reservaCliente: Reserva;

  showTotal: boolean = false;
  total: string = '';
  
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

    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
        this.scanQr();
      });
      this.traerReserva();
      this.listarReservas();
      console.log( this.reservaCliente);
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
      this.usuarioOnline.mesa = qr.replace('MESA-', '');
      console.log( this.reservaCliente);
      if( this.reservaCliente != undefined ){
        console.log(this.reservaCliente.codigo_mesa);
        if (this.consultarReservaDelCliente( this.usuarioOnline.mesa)) {
          if (this.verificarMesaCerrada( this.usuarioOnline.mesa)) {
            this.clienteService.CargarMesa(this.usuarioOnline).
               subscribe((data) => {
                 if (data["Estado"] == "OK") {
                   this.errorHandler.confirmationToast(data["Mensaje"]);
                   this.servicioMesa.CambiarEstado(this.usuarioOnline.mesa, EstadosMesa.Asignada);
                   this.servicioReserva.Baja(this.reservaCliente.id_reserva);
                   this.volver();
                 } else {
                   this.errorHandler.errorToast(data["Mensaje"]);
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
        
          } else {
             this.errorHandler.errorToast("Usted tiene reservada otra mesa");
              this.volver();
          }

      }else{        
        this.servicioReserva.ReservaXMesa(this.usuarioOnline.mesa)
        .subscribe(
          (res) => {
             this.reservas = res;
            // console.log(this.reservas);             
             let tiempo;
            let diferencia;
            if (this.reservas.length > 0) {
            this.reservas.forEach(reserva => {
                let horaR = new Date(reserva.fecha.substr(0, 10) + " " + reserva.hora)
                tiempo =   horaR.getTime() - this.myDate.getTime();
                diferencia = Math.floor((tiempo / 1000 / 60) << 0)
                if (diferencia < 40) {
                  this.errorHandler.errorToast("Esta mesa esta reservada");
                  this.volver();
                 console.log( diferencia);
                 }else{
                      
                  if (this.verificarMesaCerrada( this.usuarioOnline.mesa)) {
                     this.clienteService.CargarMesa(this.usuarioOnline).
                     subscribe((data) => {
                       if (data["Estado"] == "OK") {
                         this.errorHandler.confirmationToast(data["Mensaje"]);
                         this.servicioMesa.CambiarEstado(this.usuarioOnline.mesa, EstadosMesa.Asignada);
                         this.volver();
                       } else {
                         this.errorHandler.errorToast(data["Mensaje"]);
                         this.volver();
                       }
      
                     }, (error) => {
                       this.errorHandler.errorToast(error);
                       this.volver();
                     })
                  }else {
                    this.errorHandler.errorToast("Esta mesa no esta libre");
                    this.volver();
                  }

                 }
                })
              }
            })
                 /*else{

                  /*if (this.verificarMesaCerrada( this.usuarioOnline.mesa)) {
             
                     this.clienteService.CargarMesa(this.usuarioOnline).
                       subscribe((data) => {
                         if (data["Estado"] == "OK") {
                           this.errorHandler.confirmationToast(data["Mensaje"]);
                           this.servicioMesa.CambiarEstado(this.usuarioOnline.mesa, EstadosMesa.Asignada);
                           this.volver();
                         } else {
                           this.errorHandler.errorToast(data["Mensaje"]);
                           this.volver();
                         }
        
                       }, (error) => {
                         this.errorHandler.errorToast(error);
                         this.volver();
                       })
                      
                   } else {
                     this.errorHandler.errorToast("Esta mesa no esta libre");
                     this.volver();
                   }
                   
                 }           
    
            });
          }
          });
       */
     
      }  
     
    } else if(qr.indexOf('PROPINA-') > -1) {
      if (this.usuarioOnline.tipo == 'registrado' || this.usuarioOnline.tipo == 'anonimo') {
        this.clienteService.TraerCliente(this.usuarioOnline.id)
          .subscribe((cliente: any) => {
            if (cliente.mesa) {
              if (cliente.mesa != null) {
                if (this.verificarMesaComiendo(cliente.mesa) || cliente.mesa == 'MES00') {
                  this.errorHandler.confirmationToast("Gracias por su propina de " + (qr.replace('PROPINA-', '') + '%!'));
                  this.cliente = cliente;
                  let monto = parseFloat(cliente.monto);
                  if (cliente.descuento == 'tateti') {
                    monto = (monto * 0.9) * (1 + (parseInt(qr.replace('PROPINA-', '')) / 100));
                  } else {
                    monto = monto * (1 + (parseInt(qr.replace('PROPINA-', '')) / 100))
                  }
                  this.total = monto.toFixed(2);
                  this.showTotal = true;
                  this.servicioMesa.CambiarEstado(qr.replace('MESA-', ''), EstadosMesa.Pagando);
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
        if (menu && this.usuarioOnline.tipo == 'registrado' || menu && this.usuarioOnline.tipo == 'anonimo') {
          if (this.usuarioOnline.mesa) {
            this.pedidoService.Registrar(this.usuarioOnline.mesa, menu.id, this.usuarioOnline.usuario, 0)
              .then(
                res => {
                  this.errorHandler.confirmationToast('Pedido registrado!');
                  this.servicioMesa.CambiarEstado(this.usuarioOnline.mesa, EstadosMesa.EsperandoPedido);
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


  verificarReserva(codigo: string , listadoReservas: any) {
    let respuesta = false;
   
    this.servicioReserva.ReservaXMesa(codigo)
    .subscribe(
      (res) => {
         this.reservas = res;
         console.log(this.reservas);
         
         let tiempo;
        let diferencia;
        if (this.reservas.length > 0) {
        this.reservas.forEach(reserva => {
          
            let horaR = new Date(reserva.fecha.substr(0, 10) + " " + reserva.hora)
            tiempo =   horaR.getTime() - this.myDate.getTime();
            diferencia = Math.floor((tiempo / 1000 / 60) << 0)
            if (diferencia < 40) {
              respuesta = true;
             console.log( diferencia);
            }     

        });
      }
      }); 

    return respuesta;
    console.log(respuesta);
  }

  cargarMesas() {
    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
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


  consultarReservaDelCliente(mesa: string) {
    let respuesta = false;    
      if (this.reservaCliente.codigo_mesa == mesa && this.reservaCliente.estado == 'A') {
        respuesta = true;
      }
    
    return respuesta;
  }

  traerReserva() {

    this.servicioReserva.TraerCliente(this.usuarioOnline.id).
      subscribe((res) => {
        if (res) {
          this.reservaCliente = res;
          console.log( this.reservaCliente);
        }
      })

  }


  listarReservas(){
    this.servicioReserva.Listar().subscribe(
      (res) => {
       this.listadoReserva = res;
       console.log( this.listadoReserva);
      });
  }

}

