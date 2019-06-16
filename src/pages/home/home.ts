import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { IniciarsesionPage } from './../iniciarsesion/iniciarsesion';
import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';
import { AuthService } from '../../providers/authentication-service/auth.service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage   implements OnInit {

  usuarioOnline: string = "usuario@usuario.com";  

  constructor( private navCtrl : NavController,
    private error : ErrorsHandlerProvider,
    private autenticationService: AuthService,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerProvider,
    private authService: AuthService) {

  }

  ionViewDidLoad() {
    this.usuarioOnline = this.authService.getUserInfo().usuario;
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
    this.autenticationService.logout();
    this.navCtrl.push(IniciarsesionPage);
  }
}
