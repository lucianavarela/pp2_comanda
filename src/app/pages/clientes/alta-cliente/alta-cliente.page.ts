import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ErrorHandlerService } from '../../../services/error-handler/error-handler.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.page.html',
  styleUrls: ['./alta-cliente.page.scss'],
})
export class AltaClientePage implements OnInit {
  
  usuario: User;
  cliente : Cliente;
  ocultarR: boolean = true;
  ocultarA: boolean = true;
  image: string = null;
  secondPass: string;


  constructor( private errorHandler: ToastService,private navCtrl: NavController,private qrScanner: QRScanner,
    private miHttp: ClienteService) { 
      this.cliente = new Cliente();
      this.limpiarCliente();
    }

  ngOnInit() {
  }

  registradoClick(){
    this.limpiarCliente();
    this.ocultarR = false;
    this.ocultarA = false;
    this.cliente.tipo = "registrado";
  }

  anonimoClick(){
    this.limpiarCliente();    
    this.ocultarR = true;
    this.ocultarA = false;
    this.cliente.tipo = "anonimo";
  }

  
  validarF(tipo : string){
    switch(tipo) { 
      case "registrado": { 
        if (this.cliente.nombre != "" && this.cliente.apellido != "" && this.cliente.mail != "" && this.cliente.dni != null && this.cliente.pass != "" && this.secondPass != "" ) {
          if (this.cliente.pass == this.secondPass) {
              if (this.cliente.pass.length > 5) {
                  return true;
              }
              this.errorHandler.errorToast("La contraseña es muy corta");

          } else {
              this.errorHandler.errorToast("Las contraseñas son diferentes");

          }
      } else {
          this.errorHandler.errorToast("Debe completar todos los campos");

      }
      return false;
         break; 
      } 
      case "anonimo": { 
        if (this.cliente.nombre != ""  && this.cliente.mail != "" && this.cliente.pass != "" && this.secondPass != "" ) {
          if (this.cliente.pass == this.secondPass) {
              if (this.cliente.pass.length > 5) {
                  return true;
              }
              this.errorHandler.errorToast("La contraseña es muy corta");
              console.log(this.cliente.pass);

          } else {
              this.errorHandler.errorToast("Las contraseñas son diferentes");

          }
      } else {
          this.errorHandler.errorToast("Debe completar todos los campos");

      }
      return false;

         break; 
      } 
      default: { 
         //statements; 
         break; 
      } 
   } 
  }


  limpiarCliente(){
    this.cliente.nombre= "";
    this.cliente.apellido= "";
    this.cliente.dni= null;
    this.cliente.mail="";
    this.cliente.pass= "";
    this.secondPass = "";
  }



  registrarCliente(){
    if(this.validarF(this.cliente.tipo)){      
     this.miHttp.alta(this.cliente)
     .subscribe(response => {  
       console.log(response);
       if (response['Estado'] === 'OK') {          
         this.limpiarCliente();     
         this.errorHandler.confirmationToast("Se dio de alta correctamente el cliente, le llegara un mail para confirmar" );
       } else {
         this.errorHandler.errorToast(response['Mensaje'] );
       }     
       }),
       (error) =>{
         this.errorHandler.errorToast("Se produjo un error al ingresar" );       
       }
     }
    }

    cancel(){
      this.navCtrl.navigateForward('home');
    }

    volver(){
      this.navCtrl.navigateForward('inicioCliente');
    }

    scanQr() {
      try {
        const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          if (text) {
            this.qrScanner.hide();
            scanSub.unsubscribe();
            ionApp.style.display = 'block';
            this.errorHandler.confirmationToast(text);
          }
        });
        this.qrScanner.show();
        ionApp.style.display = 'none';
      } catch (e) {
      // console.log(e) // --> usar el alert/toast que vayamos a usar
        this.errorHandler.errorToast(e);
      }
    }
  
    
    

}
