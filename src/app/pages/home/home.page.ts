import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
<<<<<<< HEAD
//import { QRScanner } from '@ionic-native/qr-scanner/ngx';
=======
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
import { User } from '../../models/user';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { AuthService } from '../../services/auth/auth.service';
import { SpinnerHandlerService } from '../../services/spinner-handler/spinner-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioOnline: User;
  listadoIconos: Array<any> = new Array;
  logo: boolean;

  listados: Array<any> = [
    {
      nombre: "clientes",
      imagen: "assets/imgs/home/altacliente.png",
      accion: "alta-cliente"
    },
    {
      nombre: "empleados",
      imagen: "assets/imgs/home/empleados.png",
      accion: "empleados"
    },
    {
      nombre: "reservas",
      imagen: "assets/imgs/home/reserva.png",
      accion: "reservas"
    },
    {
      nombre: "ahorcado",
      imagen: "assets/imgs/home/juegoPostre.png",
      accion: "JuegoPostrePage"
    },
    {
      nombre: "pedidos",
      imagen: "assets/imgs/home/pedidos.png",
      accion: "carga-pedido"
    },
    {
      nombre: "menu",
      imagen: "assets/imgs/home/menu.png",
      accion: "ClienteMenuPage"
    },
    {
      nombre: "juegos",
      imagen: "assets/imgs/home/juegos.png",
      accion: "JuegosHomePage"
    },
  ]



  constructor(private navCtrl: NavController,
    private error: ErrorHandlerService,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerService,
    private authService: AuthService,
    private router: Router,
<<<<<<< HEAD
    //private qrScanner: QRScanner
    ) {
  }
/*
=======
    private qrScanner: QRScanner) {
  }

>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
  scanQr() {
    try {
      const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        if (text) {
          this.qrScanner.hide();
          scanSub.unsubscribe();
          ionApp.style.display = 'block';
          console.log(text);
        }
      });
      this.qrScanner.show();
      ionApp.style.display = 'none';
    } catch (e) {
      this.alertCtrl.create({
        header: 'Error',
        message: e.message,
        buttons: ['OK'],
        cssClass: 'present-alert'
      });
    }
<<<<<<< HEAD
  }*/
=======
  }
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845

  ionViewWillEnter() {
    if (this.authService.isLogged()) {
      this.usuarioOnline = this.authService.getUserInfo();
    } else {
<<<<<<< HEAD
      this.navCtrl.navigateForward('bienvenidos');
=======
      this.navCtrl.navigateForward('login');
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
    }
    this.filtrar();
    this.esconderLogo();
    console.log(this.usuarioOnline);
  }

  cerrarSesionClick() {
    this.authService.logout();
<<<<<<< HEAD
    this.navCtrl.navigateForward('bienvenidos');
=======
    this.navCtrl.navigateForward('login');
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
  }


  iconosClick(icono) {

    //this.navCtrl.navigateForward([icono.accion, { usuario: this.usuarioOnline}]);
    this.router.navigate([icono.accion, { usuario: this.usuarioOnline }]);
<<<<<<< HEAD
    
=======

>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
  }

  filtrar() {

    if (this.usuarioOnline.tipo == "registrado") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "clientes" || listado.nombre == "menu" || listado.nombre == "juegos" || listado.nombre == "reservas");
    } else if (this.usuarioOnline.tipo == "Cocinero" || this.usuarioOnline.tipo == "Cervecero" || this.usuarioOnline.tipo == "Bartender") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos");
    } else if (this.usuarioOnline.tipo == "Mozo") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos" || listado.nombre == "clientes" || listado.nombre == "reservas");
    }
    else if (this.usuarioOnline.tipo == "Socio") {
      this.listadoIconos = this.listados
    }

  }


  private esconderLogo() {
    if (this.listadoIconos.length > 4) {
      this.logo = true;
    } else {
      this.logo = false;
    }
  }

}
