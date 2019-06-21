import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { Cliente } from '../../../models/cliente';
import { ClienteService } from '../../../services/cliente/cliente.service';
import { NavController } from '@ionic/angular';
<<<<<<< HEAD
import { ToastService } from 'src/app/services/toast/toast.service';
=======
import { ErrorHandlerService } from '../../../services/error-handler/error-handler.service';
>>>>>>> e1a344b273c643baff69ee9834e77a446f387da9

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


  constructor( private errorHandler: ToastService,private navCtrl: NavController,
    private miHttp: ClienteService) { 
      this.cliente = new Cliente();
    }

  ngOnInit() {
  }

  registradoClick(){
    
    this.ocultarR = false;
    this.ocultarA = false;
    this.cliente.tipo = "registrado";
  }

  anonimoClick(){    
    this.ocultarR = true;
    this.ocultarA = false;
    this.cliente.tipo = "anonimo";
  }

  validar(){
   
    if(this.cliente.tipo == "anonimo"){
      if(this.cliente.nombre != undefined){
        return true;
      }else{
        this.errorHandler.errorToast("Debe completar el campo Nombre");      
        return false;
      }

    }

    if(this.cliente.tipo == "registrado")
    {
        if(this.cliente.nombre != '' && this.cliente.apellido != '' && this.cliente.dni != null ){
          return true;
        }else{
          this.errorHandler.errorToast("Debe llenar todos los campos");      
          return false;
        }
    }
    
  

  }


  limpiarCliente(){
    this.cliente.nombre= "";
    this.cliente.apellido= "";
    this.cliente.dni= null;
  }



  registrarCliente(){
    if(this.validar()){

      //let spiner = this.spinnerHandler.presentLoadingCustom();
     //spiner.present();
     this.miHttp.alta(this.cliente)
     .subscribe(response => {  
       console.log(response);
       if (response['Estado'] === 'OK') {
          
         this.limpiarCliente();     
         this.errorHandler.confirmationToast("Se dio de alta correctamente el cliente" );
       } else {
         this.errorHandler.errorToast(response['Mensaje'] );
       }        
        
      // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
       }),
       (error) =>{
         this.errorHandler.errorToast("Se produjo un error al ingresar" );
        
       }
      // spiner.dismiss();
      }else{
        console.log('ERRoR');
        this.errorHandler.errorToast("Debe completar el campo Nombre"); 
        

      }

    }

    cancel(){
      this.navCtrl.navigateForward('home');
    }

    volver(){
      this.navCtrl.navigateForward('home');
    }
    
    atras() {
      this.navCtrl.pop();
    }

}
