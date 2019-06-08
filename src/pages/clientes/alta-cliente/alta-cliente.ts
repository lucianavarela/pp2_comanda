import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../../Model/Cliente'
import { HomePage } from '../../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ErrorsHandlerProvider } from '../../../providers/errors-handler/errors-handler';
import { User } from '../../../Model/User';
import { ClienteServiceProvider } from '../../../providers/cliente-service/cliente-service';
import { SpinnerHandlerProvider } from '../../../providers/spinner-handler/spinner-handler';


/**
 * Generated class for the AltaClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alta-cliente',
  templateUrl: 'alta-cliente.html',
})
export class AltaClientePage {

  usuario: User;
  cliente : Cliente;
  ocultarR: boolean = true;
  ocultarA: boolean = true;
  image: string = null;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera: Camera,
    private errorHandler: ErrorsHandlerProvider,
    private miHttp: ClienteServiceProvider ,
    private spinnerHandler: SpinnerHandlerProvider, ) {
    this.usuario = new User();
    this.usuario = this.navParams.get('usuario');
    this.cliente = new Cliente();
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaClientePage');
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

  cancel(){
    this.navCtrl.setRoot(HomePage, { usuario: this.usuario }); 
  }

  

  registrarCliente(){
    if(this.validar()){

      let spiner = this.spinnerHandler.presentLoadingCustom();
      spiner.present();
     this.miHttp.alta(this.cliente)
     .subscribe(response => {  
       console.log(response);
       if (response['Estado'] === 'OK') {
         this.cliente= new Cliente();           
         this.errorHandler.mostrarMensajeConfimación("Se dio de alta correctamente el cliente",'Ok' );
       } else {
         this.errorHandler.mostrarMensajeConfimación(response['Mensaje'],'Error' );
       }        
        
      // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
       }),
       (error) =>{
         this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar",'Error' );
   
       }

       spiner.dismiss();
    

    }


  }

  validar(){
    if(this.cliente.tipo == "registrado")
    {
        if(this.cliente.nombre != '' && this.cliente.apellido != '' && this.cliente.dni != null ){
          return true;
        }else{
          this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos",'Error');      
          return false;
        }
    }else if(this.cliente.tipo == "anonimo"){
      if(this.cliente.nombre != ''){
        return true;
      }else{
        this.errorHandler.mostrarMensajeConfimación("Debe completar el campo Nombre",'Error');      
        return false;
      }

    }
  }


  singIn() {
    if(this.validar()){
      let spiner = this.spinnerHandler.presentLoadingCustom();
       spiner.present();
      this.miHttp.alta(this.cliente)
      .subscribe(response => {  
        console.log(response);
        if (response['Estado'] === 'OK') {
          this.cliente= new Cliente();           
          this.errorHandler.mostrarMensajeConfimación("Se dio de alta correctamente el cliente",'Ok' );
        } else {
          this.errorHandler.mostrarMensajeConfimación(response['Mensaje'],'Error' );
        }        
         
       // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
        }),
        (error) =>{
          this.cliente= new Cliente(); 
          this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar",'Error' );
    
        }

        spiner.dismiss();
    }  
      
  }
  

  //camara
  getPicture(){
    let options: CameraOptions = {
      quality: 50,
      encodingType: this.camera.EncodingType.JPEG,
      targetWidth: 600,
      targetHeight: 600,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true
    }
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
      
    })
  }



}
