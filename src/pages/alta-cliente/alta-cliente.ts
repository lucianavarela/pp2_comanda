import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../Model/Cliente'
import { HomePage } from '../home/home';

/**
 * Generated class for the AltaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alta-cliente',
  templateUrl: 'alta-cliente.html',
})
export class AltaClientePage {

  cliente : Cliente;
  ocultarR: boolean = true;
  ocultarA: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cliente = new Cliente();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaClientePage');
  }

  registradoClick(){
    this.ocultarR = false;
    this.ocultarA = false;
    this.cliente.tipo = "registrado";
  }

  anonimoClick(){
    this.ocultarR = true;
    this.ocultarA = false;
    this.cliente.tipo = "anonimo";
  }

  cancel(){
    this.navCtrl.push(HomePage);
  }




}
