import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EsperaService } from 'src/app/services/espera/espera.service';

@Component({
  selector: 'app-home-qr',
  templateUrl: './home-qr.page.html',
  styleUrls: ['./home-qr.page.scss'],
})
export class HomeQrPage implements OnInit {

  usuarioOnline:  User;
  listadoIconos: Array<any> = [
    {
      nombre: "Espera",
      imagen: "assets/imgs/home/qrEspera.png",
      accion: "espera"
    },
    
  ]

  constructor(private errorHandler: ToastService,private navCtrl: NavController,public esperaServicio: EsperaService,
    private qrScanner: QRScanner, private authService: AuthService,) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    console.log(  this.usuarioOnline);
         
  }


  Accion(qr : string) {
    switch (qr) {
      case 'espera':
      this.esperaServicio.alta(this.usuarioOnline).
      subscribe((data) => { // Success
        this.errorHandler.confirmationToast(data["Mensaje"]);
         
      console.log(data);
    },(error) =>{
      console.error(error);
      this.errorHandler.errorToast("Se produjo un error al carga la lista ");
             
    }
    );
       
      break;
      default:
      this.errorHandler.errorToast("no es un Qr valido");
      break;
     
    }

  }


  scanQr() {
 
   try {
      const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        if (text) {
          this.qrScanner.hide();
          scanSub.unsubscribe();
          ionApp.style.display = 'block';
          this.Accion(text);
        }
      });
      this.qrScanner.show();
      ionApp.style.display = 'none';
    } catch (e) {
      this.errorHandler.errorToast(e);
      
    }
    
  }



  volver(){
    this.navCtrl.navigateForward('home');
  }

}
