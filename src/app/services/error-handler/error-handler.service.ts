import { Injectable } from '@angular/core';
import { ToastService } from '../toast/toast.service';

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

    constructor(private toasterService: ToastService) {
    }

    public mostrarMensajeError(mensaje) {
        this.toasterService.errorToast(mensaje);
    }

    public mostrarMensajeConfimación(mensaje) {
        this.toasterService.confirmationToast(mensaje);
    }
}
