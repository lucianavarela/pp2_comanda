import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { AuthService } from '../../services/auth/auth.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { SpinnerHandlerService } from '../../services/spinner-handler/spinner-handler.service';
import { EmpleadoService } from '../../services/empleado/empleado.service';

@Component({
    selector: 'app-registrarse',
    templateUrl: './registrarse.page.html',
    styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {


    user = { name: '', pass: '', secondPass: '' };

    constructor(public navCtrl: NavController,
        private authService: AuthService,
        private errorHandler: ErrorHandlerService,
        private spinnerHandler: SpinnerHandlerService,
        public alertCtrl: AlertController,
        private empleadoService: EmpleadoService) {
    }

    registerUser() {
        if (this.validForm()) {
            this.empleadoService.Registrar(this.user.name, this.user.pass, '', '')
                .then(response => {
                    alert(response)
                    //this.navCtrl.navigateForward('home');
                })
                .catch(error => {
                    this.errorHandler.mostrarMensajeConfimación("Se produjo un error al registrarse", 'Error');
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
                this.errorHandler.mostrarMensajeConfimación("La contraseña es muy corta", 'Error');

            } else {
                this.errorHandler.mostrarMensajeConfimación("Las contraseñas son diferentes", 'Error');

            }
        } else {
            this.errorHandler.mostrarMensajeConfimación("Debe completar todos los campos", 'Error');

        }
        return false;

    }

    ngOnInit() {
    }

}
