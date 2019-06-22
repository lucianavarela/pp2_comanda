import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {


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
    //let alert = 
    this.alertCtrl.create({
        header: title ? title : "Error!",
        cssClass: 'error-alert',
        message: message ? message + errorMessage : errorMessage
    });
    //alert.present();
}

public mostrarErrorLiteral(error, title?) {
    //let alert = 
    this.alertCtrl.create({
        header: title ? title : "Error!",
        message: error,
        cssClass: 'error-alert'
    });
    
}



public mostrarMensajeConfimación(mensaje, title?) {
    //let alert = 
    this.alertCtrl.create({
        header: title ? title : "Error!",
        message: mensaje,
        buttons: ['Aceptar'],
        cssClass:'present-alert'
      });
      //alert.present();
    
}

private getErrorMessage(error) {
    var mensaje = "Error desconocido";
    for (var i = 0; i < ErrorHandlerService.knownErrors.length; i++) {
        if (error.code == ErrorHandlerService.knownErrors[i].code) {
            mensaje = ErrorHandlerService.knownErrors[i].message;
            break;
        }
    }
    return mensaje;
}

public presentAlert() {
    //let alert = 
    this.alertCtrl.create({
      header: 'Tutorial',
      message: 'Presione los botones para escuchar el sonido',
      buttons: ['Aceptar'],
      cssClass:'present-alert'
    });
    //alert.present();
  }


}
