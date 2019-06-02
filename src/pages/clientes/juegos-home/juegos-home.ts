import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../../Model/User';

/**
 * Generated class for the JuegosHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos-home',
  templateUrl: 'juegos-home.html',
})
export class JuegosHomePage {

  usuario: User;
  listadoIconos: Array <any> = [
    {
      nombre: "Descuento",
      imagen: "assets/imgs/home/iconoDescuento.png",      
      accion: "AltaClientePage"
  },
  {
    nombre: "bebida",
    imagen: "assets/imgs/home/iconoBebida.png",
    accion: "ReservasPage"
    },
    {
      nombre: "ahorcado",
      imagen: "assets/imgs/home/iconoAhorcado.png",
      accion: "JuegoPostrePage"
  }
  ]


  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = new User( );
    this.usuario = this.navParams.get('usuario');

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosHomePage');
  }

 
  
  iconosClick(icono){
    this.navCtrl.push( icono.accion, { usuario: this.usuario});
  
  }
  
  
  

}
