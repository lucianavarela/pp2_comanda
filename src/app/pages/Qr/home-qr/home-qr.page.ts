import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EsperaService } from 'src/app/services/espera/espera.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
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
  
  reservas: any;
  listadoMesas  :Mesa[] = [];
  mesa : any;
  cliente : Cliente;
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
    private servicioMesa :  MesaService,
    private servicioReserva : ReservaService,
    private authService: AuthService) {
    this.mesa= new Mesa();
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
  
    
   
  }

  Accion(qr: string) {
    if (qr == 'LISTA DE ESPERA') {
      this.esperaServicio.alta(this.usuarioOnline).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
          console.log(data);
        }, (error) => {
          console.error(error);
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
        });
    } else if (qr.indexOf('MESA-') > -1) {
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
    } else {
      this.errorHandler.errorToast("No es un Qr valido");
    }

    this.volver();
  }

  scanQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.Accion(barcodeData.text.toUpperCase());
    }).catch(e => {
      this.errorHandler.errorToast(e);
    });
  }

       

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
    }
  }


 


  volver() {
    this.navCtrl.navigateForward('home');
  }
}
