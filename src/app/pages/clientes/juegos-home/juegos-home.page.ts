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
<<<<<<< HEAD
  listadoIconos: Array <any> = [
    {
      nombre: "Descuento",
      imagen: "assets/imgs/home/iconoDescuento.png",      
      accion: "tateti"
  },
  {
    nombre: "bebida",
    imagen: "assets/imgs/home/iconoBebida.png",
    accion: "ReservasPage"
=======
  listadoIconos: Array<any> = [
    {
      nombre: "Descuento",
      imagen: "assets/imgs/home/iconoDescuento.png",
      accion: "tateti"
    },
    {
      nombre: "bebida",
      imagen: "assets/imgs/home/iconoBebida.png",
      accion: "ReservasPage"
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
    },
    {
      nombre: "ahorcado",
      imagen: "assets/imgs/home/iconoAhorcado.png",
      accion: "ahorcado"
<<<<<<< HEAD
  }
=======
    }
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
  ]


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

<<<<<<< HEAD
  iconosClick(icono){
    this.navCtrl.navigateForward(icono.accion);
  
  }

 volver(){
=======
  iconosClick(icono) {
    this.navCtrl.navigateForward(icono.accion);

  }

  volver() {
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
    this.navCtrl.navigateForward('home');
  }

}
