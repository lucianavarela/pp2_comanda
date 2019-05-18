import { AlertController } from 'ionic-angular'
import { Injectable } from '@angular/core';

/*
  Generated class for the ErrorsHandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ErrorsHandlerProvider {

 
  static knownErrors: any = [
    {
        code: 'auth/email-already-in-use',
        message: "El correo ya existe"
    },
    {
        code: 'auth/user-not-found',
        message: "El correo no se encuentra registrado"
    },
    {
        code: 'auth/wrong-password',
        message: "Contraseña Incorrecta"
    },
    {
        code: "auth/network-request-failed",
        message: "No hay conexión a internet"
    },
    {
        code: "auth/invalid-email",
        message: "Correo inválido"
    },
    {
        code: "auth/weak-password",
        message: "La contraseña debe tener mínimo 6 caracteres"
    }

];

constructor(public alertCtrl: AlertController) {
}

public mostrarError(error, title?, message?) {
    console.log("ocurrio un error", error);
    var errorMessage = this.getErrorMessage(error);
    let alert = this.alertCtrl.create({
        title: title ? title : "Error!",
        cssClass: 'error-alert',
        message: message ? message + errorMessage : errorMessage
    });
    alert.present();
}

public mostrarErrorLiteral(error, title?) {
    let alert = this.alertCtrl.create({
        title: title ? title : "Error!",
        message: error,
        cssClass: 'error-alert'
    });
    alert.present();
}



public mostrarMensajeConfimación(mensaje, title?) {
    let alert = this.alertCtrl.create({
        title: title ? title : "Error!",
        subTitle: mensaje,
        buttons: ['Aceptar'],
        cssClass:'present-alert'
      });
      alert.present();
    
}

private getErrorMessage(error) {
    var mensaje = "Error desconocido";
    for (var i = 0; i < ErrorsHandlerProvider.knownErrors.length; i++) {
        if (error.code == ErrorsHandlerProvider.knownErrors[i].code) {
            mensaje = ErrorsHandlerProvider.knownErrors[i].message;
            break;
        }
    }
    return mensaje;
}

public presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Tutorial',
      subTitle: 'Presione los botones para escuchar el sonido',
      buttons: ['Aceptar'],
      cssClass:'present-alert'
    });
    alert.present();
  }


}
