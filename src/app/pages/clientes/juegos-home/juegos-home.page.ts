import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-juegos-home',
  templateUrl: './juegos-home.page.html',
  styleUrls: ['./juegos-home.page.scss'],
})
export class JuegosHomePage implements OnInit {

  usuario: User;
  listadoIconos: Array<any> = [
    {
      nombre: "Descuento",
      imagen: "assets/imgs/home/iconoDescuento.png",
      accion: "tateti"
    },
    {
      nombre: "bebida",
      imagen: "assets/imgs/home/iconoBebida.png",
      accion: "simon"
    },
    {
      nombre: "ahorcado",
      imagen: "assets/imgs/home/iconoAhorcado.png",
      accion: "ahorcado"
    }
  ]


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  iconosClick(icono) {
    this.navCtrl.navigateForward(icono.accion);

  }

  volver() {
    this.navCtrl.navigateForward('home');
  }

}
