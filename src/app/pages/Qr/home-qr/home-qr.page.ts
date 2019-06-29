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
import { Mesa } from 'src/app/models/mesa';
import { Cliente } from 'src/app/models/cliente';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { Reserva } from 'src/app/models/reserva';

@Component({
  selector: 'app-home-qr',
  templateUrl: './home-qr.page.html',
})
export class HomeQrPage implements OnInit {
<<<<<<< HEAD
  
  reservas: any;
  listadoMesas  :Mesa[] = [];
  mesa : any;
  cliente : Cliente;
=======

  listadoMesas: Mesa[] = [];
  mesa: any;
  cliente: Cliente;
>>>>>>> f989c198e1ad6b7893d3089fb89a4af77f47b425
  usuarioOnline: any;
   myDate = new Date();
   hora1 = new Date( '2019-06-28 12:20:00');
   hora2 = new Date( '2019-06-28 13:00:00');
   flag : boolean = false;
 
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
<<<<<<< HEAD
    private servicioMesa :  MesaService,
    private servicioReserva : ReservaService,
=======
    private menuService: MenuService,
    private pedidoService: PedidoService,
    private servicioMesa: MesaService,
>>>>>>> f989c198e1ad6b7893d3089fb89a4af77f47b425
    private authService: AuthService) {
    this.mesa = new Mesa();
    this.cliente = new Cliente();
  }

  ngOnInit() {
    console.log(this.myDate);
    console.log(this.hora1);
    console.log(this.hora2);
  }

  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    this.cliente.id = this.usuarioOnline.id;
    console.log(this.usuarioOnline);
    this.scanQr();
<<<<<<< HEAD
  
    
   
=======
    // this.cargarMesas();

>>>>>>> f989c198e1ad6b7893d3089fb89a4af77f47b425
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
<<<<<<< HEAD
      this.cliente.mesa = qr.replace('MESA-', '');

    this.verificarMesa(this.cliente.mesa);
    if( this.flag == false){

      this.clienteService.CargarMesa(this.cliente).
      subscribe((data) => {
        this.errorHandler.confirmationToast(data["Mensaje"]);
      }, (error) => {
        this.errorHandler.errorToast("Se produjo un error al carga la lista ");
      });

    }else{
      this.errorHandler.errorToast("Hay una reserva para esa mesa");
    }    
=======
      this.usuarioOnline.mesa = qr.replace('MESA-', '');
      this.clienteService.CargarMesa(this.usuarioOnline).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
          this.volver();
        }, (error) => {
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
          this.volver();
        });
>>>>>>> f989c198e1ad6b7893d3089fb89a4af77f47b425
    } else {
      this.menuService.GetMenu(qr).subscribe(menu => {
        if (menu && this.usuarioOnline.tipo == 'registrado') {
          this.clienteService.GetCliente(this.usuarioOnline.id).subscribe(cliente => {
            if (cliente.mesa) {
              this.pedidoService.Registrar(cliente.mesa, menu.id, cliente.nombre, 0)
                .then(
                  (res: any) => {
                    if (res.Estado == 'OK') {
                      this.errorHandler.confirmationToast('Pedido registrado!');
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
    });
  }

<<<<<<< HEAD
       

  verificarMesa(codigo : string){

    if( this.myDate > this.hora1 && this.hora2 < this.hora2){
      let tiempo;
      let diferencia;
    this.servicioReserva.ReservaXMesa(codigo)
    .subscribe(
      (res) => {
        this.reservas= res;
        console.log(this.reservas.length);    
        
        if(this.reservas.length >0 ){
          this.reservas.forEach(reserva => {
            
        let horaR = new Date(reserva.fecha.substr(0,10)+" "+reserva.hora) 
      
            tiempo = this.myDate.getTime() - horaR.getTime();  
            diferencia= Math.floor((tiempo/1000/60) << 0)          
            if( diferencia < 40){
              this.flag = true;              
            }
          });
        }
      }
    )   
=======
  cargarMesas() {
    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
        console.log(this.listadoMesas);
      });

  }

  verificarMesa(cogido_mesa: string) {
    let respuesta = false;
    this.mesa = this.listadoMesas
      .filter(listado => listado.codigo == cogido_mesa)
    if (this.mesa.estado == "Cerrada") {
      respuesta = true;
>>>>>>> f989c198e1ad6b7893d3089fb89a4af77f47b425
    }
  }


 


  volver() {
    this.navCtrl.navigateForward('home');
  }
}
