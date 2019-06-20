import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Cliente } from 'src/app/models/Cliente';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { NavController } from '@ionic/angular';

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


  constructor( private errorHandler: ErrorHandlerService,private navCtrl: NavController,
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
        this.errorHandler.mostrarMensajeConfimación("Debe completar el campo Nombre",'Error');      
        return false;
      }

    }

    if(this.cliente.tipo == "registrado")
    {
        if(this.cliente.nombre != '' && this.cliente.apellido != '' && this.cliente.dni != null ){
          return true;
        }else{
          this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos",'Error');      
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
         this.errorHandler.mostrarMensajeConfimación("Se dio de alta correctamente el cliente",'Ok' );
       } else {
         this.errorHandler.mostrarMensajeConfimación(response['Mensaje'],'Error' );
       }        
        
      // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
       }),
       (error) =>{
         this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar",'Error' );
        
       }
      // spiner.dismiss();
      }else{
        console.log('ERRoR');
        this.errorHandler.mostrarMensajeConfimación("Debe completar el campo Nombre",'Error'); 
        this.errorHandler.presentAlert();

      }

    }

    cancel(){
      this.navCtrl.navigateForward('home');
    }
    
    atras() {
      this.navCtrl.pop();
    }

}
