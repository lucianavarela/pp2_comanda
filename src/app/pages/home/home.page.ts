import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';
import { Reserva } from 'src/app/models/reserva';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioOnline: any;
  listadoIconos: Array<any> = new Array;
  logo: boolean;



  listados: Array<any> = [
    {
      nombre: "clientes",
      imagen: "assets/imgs/home/clientes.png",
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
      accion: "alta-menu"
    },
    {
      nombre: "juegos",
      imagen: "assets/imgs/home/juegos.png",
      accion: "JuegosHome"
    },
    {
      nombre: "listarReservas",
      imagen: "assets/imgs/home/reservas.png",
      accion: "listarReservas"
    },
    {
      nombre: "socios",
      imagen: "assets/imgs/home/socios.png",
      accion: "altaSocios"
    },
    {
      nombre: "altaCliente",
      imagen: "assets/imgs/home/clientes.png",
      accion: "alta-cliente"
    },
    {
      nombre: "mesas",
      imagen: "assets/imgs/home/mesas.png",
      accion: "mesas"
    },
    {
      nombre: "delivery",
      imagen: "assets/imgs/home/delivery.png",
      accion: "delivery"
    },
    {
      nombre: "encuesta",
      imagen: "assets/imgs/home/encuesta.png",
      accion: "encuesta"
    },
    {
      nombre: "verEncuestas",
      imagen: "assets/imgs/home/encuesta.png",
      accion: "encuesta-home"
    },
    {
      nombre: "listaEspera",
      imagen: "assets/imgs/home/espera.png",
      accion: "lista-espera"
    },
    {
      nombre: "Chat",
      imagen: "assets/imgs/home/chat.png",
      accion: "chat"
    },
    {
      nombre: "tomarPedido",
      imagen: "assets/imgs/home/pedidos.png",
      accion: "pedidos-menu"
    },
    {
      nombre: "datosMesa",
      imagen: "assets/imgs/home/mesaEsta.png",
      accion: "datos-mesa"
    },
    {
      nombre: "llenarEncuesta",
      imagen: "assets/imgs/home/encuesta.png",
      accion: "llenar-encuesta"
    },
  ]



  constructor(private navCtrl: NavController,
    private authService: AuthService,
    private router: Router) {

  }

  ionViewWillEnter() {
    if (this.authService.isLogged()) {
      this.usuarioOnline = this.authService.token();
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
    this.router.navigate([icono.accion, { usuario: this.usuarioOnline }]);
  }

  filtrar() {

    if (this.usuarioOnline.tipo == "registrado") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos" || listado.nombre == "delivery" || listado.nombre == "juegos" || listado.nombre == "reservas" || listado.nombre == "encuesta");
    } else if (this.usuarioOnline.tipo == "Cervecero") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos");
    } else if (this.usuarioOnline.tipo == "Cocinero" || this.usuarioOnline.tipo == "Bartender") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos" || listado.nombre == "menu" || listado.nombre == "llenarEncuesta" );
    } else if (this.usuarioOnline.tipo == "Mozo") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos" || listado.nombre == "clientes" || listado.nombre == "reservas" || listado.nombre == "mesas");
    } else if (this.usuarioOnline.tipo == "Socio" || this.usuarioOnline.tipo == "Dueño") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos" || listado.nombre == "clientes" || listado.nombre == "socios"
          || listado.nombre == "listarReservas" || listado.nombre == "empleados" || listado.nombre == "datosMesa" || listado.nombre == "mesas" || listado.nombre == "verEncuestas" || listado.nombre == "listaEspera");
    } else if (this.usuarioOnline.tipo == "anonimo") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "pedidos" || listado.nombre == "encuesta");
    } else if (this.usuarioOnline.tipo == "Delivery") {
      this.listadoIconos = this.listados
        .filter(listado => listado.nombre == "tomarPedido" || listado.nombre == "Chat");
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
