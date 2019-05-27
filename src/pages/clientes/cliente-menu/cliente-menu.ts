import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ClienteMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente-menu',
  templateUrl: 'cliente-menu.html',
})
export class ClienteMenuPage {

  items: Array <any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [
      {nombre:'Cerveza', precio:'$60' , tipo: 'Cervezero',
       imagem:"https://elnueve-compress.s3-accelerate.amazonaws.com/files/1537741874116cerveza-pinta-stout-ale-lagger-vasos.jpg"},
       {nombre:'Vino', precio:'$100' , tipo: 'Bartender',
       imagem:"https://borderio.store/wp-content/uploads/2018/05/vino-injusto-malbec-2017-frente-fb-1200.jpg"},
       {nombre:'Jugo', precio:'$60' , tipo: 'Bartender',
       imagem:"http://nutricionyvida.cl/wp-content/uploads/jugo.jpg"}
     ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteMenuPage');
  }

}
