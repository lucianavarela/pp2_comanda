import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';
import { ErrorsHandlerProvider } from './../../providers/errors-handler/errors-handler';
import { HomePage } from './../home/home';
import { IniciarsesionPage } from './iniciarsesion';
import { AuthService } from '../../providers/authentication-service/auth.service';
import { EmpleadoService } from '../../providers/empleado.service';


@Component({
    selector: 'page-iniciarsesion',
    templateUrl: 'registrarse.html',
})
export class RegistrarsePage {

    user = { name: '', pass: '', secondPass: '' };

    constructor(public navCtrl: NavController,
        private authService: AuthService,
        private errorHandler: ErrorsHandlerProvider,
        private spinnerHandler: SpinnerHandlerProvider,
        public alertCtrl: AlertController,
        private empleadoService: EmpleadoService) {
    }

    registerUser() {
        if (this.validForm()) {    
            this.empleadoService.Registrar(this.user.name, this.user.pass, '', '')
            .then(response => {                   
                this.navCtrl.setRoot(HomePage, { usuario: response });                
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