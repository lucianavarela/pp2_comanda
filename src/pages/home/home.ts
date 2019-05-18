import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationServiceProvider } from './../../providers/authentication-service/authentication-service';
import { IniciarsesionPage } from './../iniciarsesion/iniciarsesion';
import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage   implements OnInit {

  usuarioOnline: string = "usuario@usuario.com";
  
  
  


  constructor( private navCtrl : NavController,
    private MiAuth: AngularFireAuth,
    private error : ErrorsHandlerProvider,
    private autenticationService: AuthenticationServiceProvider,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerProvider) {

  }

  ionViewDidLoad() {
    this.usuarioOnline = this.MiAuth.auth.currentUser.email;
    
    
   
  }


  ngOnInit() {
    console.log("on init");
  
    
  }

  fotosLindasClick() {
   
   let spiner = this.spinnerHandler.presentLoadingCustom();
   spiner.present();
  }

  fotosFeasClick() {
  
    let spiner = this.spinnerHandler.presentLoadingCustom1();
    spiner.present();
  }




  cerrarSesionClick(){
    this.autenticationService.logOut();
    this.navCtrl.push( IniciarsesionPage);

}



}
