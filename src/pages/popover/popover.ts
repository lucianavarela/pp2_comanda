import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../Model/User';
import { IniciarsesionPage } from '../iniciarsesion/iniciarsesion';

/**
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  usuario: User;
  url:string= "http://kq000525.ferozo.com/API_Comanda/Fotos/Menu/sin_img.jpg";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.usuario = new User();
      this.usuario = this.navParams.get('usuario');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  cerrarSesionClick(){   
    this.navCtrl.push( IniciarsesionPage);
}


}
