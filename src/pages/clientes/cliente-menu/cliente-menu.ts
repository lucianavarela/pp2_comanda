import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HttpBaseProvider } from '../../../providers/http-base/http-base';
import { MenuServiceProvider } from '../../../providers/menu-service/menu-service';
import { Menu } from '../../../Model/Menu';
import { User } from '../../../Model/User';

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
  usuario: User;

  items: any;
  //url:string = "http://kq000525.ferozo.com/comanda1/fotos/carta/";
      url:string= "http://kq000525.ferozo.com/API_Comanda/Fotos/Menu/";
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public servicio : MenuServiceProvider) {
      this.usuario = new User();
      this.usuario = this.navParams.get('usuario');
      this.items = new Array ();
      this.lista();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClienteMenuPage');

   
    
    


  }

  lista(){
   
    return this.servicio.listar().
     subscribe((data) => { // Success
      this.items =data;   
    },(error) =>{
      console.error(error);
    }
    );
  
   
   }

}
