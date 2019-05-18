import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';

import { AuthenticationServiceProvider } from './../../providers/authentication-service/authentication-service';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';
import { ErrorsHandlerProvider } from './../../providers/errors-handler/errors-handler';
import { HomePage } from './../home/home';
import { IniciarsesionPage } from './iniciarsesion';


@Component({
    selector: 'page-iniciarsesion',
    templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

    user = { name: '', pass: '', secondPass: '' };

    constructor(public navCtrl: NavController,
        private autenticationService: AuthenticationServiceProvider,
        private errorHandler: ErrorsHandlerProvider,
        private spinnerHandler: SpinnerHandlerProvider,
        public alertCtrl: AlertController) {
    }

    registerUser() {
        if (this.validForm()) {           
            let spiner =  this.spinnerHandler.presentLoadingCustom();
            spiner.present();
            this.autenticationService.registerUser(this.user.name, this.user.pass)
                .then(response => {
                    spiner.dismiss();                    
                    this.navCtrl.setRoot(HomePage, { usuario: response })
                
                })
                .catch(error => {
                   this.errorHandler.mostrarMensajeConfimación( "Se produjo un error al registrarse", 'Error');
                })
        }
    }

    cancel(){
        this.navCtrl.setRoot(IniciarsesionPage, { 'fromApp': true })
    }


    private validForm() {
        if(this.user.name && this.user.pass && this.user.secondPass){
            if(this.user.pass == this.user.secondPass){
                if(this.user.pass.length > 5){
                    return true;
                }
                this.errorHandler.mostrarMensajeConfimación( "La contraseña es muy corta", 'Error');
                
            }else{
                this.errorHandler.mostrarMensajeConfimación( "Las contraseñas son diferentes", 'Error');
                
            }
        }else{
            this.errorHandler.mostrarMensajeConfimación( "Debe completar todos los campos", 'Error');
                
        }
        return false;

    }
}