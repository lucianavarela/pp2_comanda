import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { EmpleadoService } from '../../services/empleado/empleado.service';

@Component({
    selector: 'app-registrarse',
    templateUrl: './registrarse.page.html',
    styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {


    user = { name: '', pass: '', secondPass: '' };

    constructor(public navCtrl: NavController,
        private errorHandler: ErrorHandlerService,
        private empleadoService: EmpleadoService) {
    }

    registerUser() {
        if (this.validForm()) {
            this.empleadoService.Registrar(this.user.name, this.user.pass, '', '')
                .then(response => {
                    this.errorHandler.mostrarMensajeConfimación("Usuario registrado")
                    this.navCtrl.navigateForward('home');
                })
                .catch(error => {
                    this.errorHandler.mostrarMensajeError(error);
                })
        }
    }

    cancel() {
        this.navCtrl.navigateForward('login');
    }


    private validForm() {
        if (this.user.name && this.user.pass && this.user.secondPass) {
            if (this.user.pass == this.user.secondPass) {
                if (this.user.pass.length > 5) {
                    return true;
                }
                this.errorHandler.mostrarMensajeError("La contraseña es muy corta");

            } else {
                this.errorHandler.mostrarMensajeError("Las contraseñas son diferentes");

            }
        } else {
            this.errorHandler.mostrarMensajeError("Debe completar todos los campos");

        }
        return false;

    }

    ngOnInit() {
    }

}
