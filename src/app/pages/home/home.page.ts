import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
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
      accion: "activar-clientes"
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
      nombre: "pedidos",
      imagen: "assets/imgs/home/pedidos.png",
      accion: "pedidos-menu"
    },
    {
      nombre: "menu",
      imagen: "assets/imgs/home/menu.png",
      accion: "ClienteMenuPage"
    },
    {
      nombre: "juegos",
      imagen: "assets/imgs/home/juegos.png",
      accion: "JuegosHome"
    },
  ]



  constructor(private navCtrl: NavController,
    private authService: AuthService,
    private router: Router) {
  }

  ionViewWillEnter() {
    if (this.authService.isLogged()) {
      this.usuarioOnline = this.authService.getUserInfo();
      console.log(this.usuarioOnline.tipo)
    } else {
      this.navCtrl.navigateForward('bienvenido');
    }
    this.filtrar();
    this.esconderLogo();
    console.log(this.usuarioOnline);
  }

  cerrarSesionClick() {
    this.authService.logout();
    this.navCtrl.navigateForward('bienvenido');
  }


  iconosClick(icono) {

    //this.navCtrl.navigateForward([icono.accion, { usuario: this.usuarioOnline}]);
    this.router.navigate([icono.accion, { usuario: this.usuarioOnline }]);
  }

  filtrar() {

    if (this.usuarioOnline.tipo == "registrado") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos" || listado.nombre == "menu" || listado.nombre == "juegos" || listado.nombre == "reservas");
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
