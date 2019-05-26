import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Cliente } from '../../../Model/Cliente'
import { HomePage } from '../../home/home';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ErrorsHandlerProvider } from '../../../providers/errors-handler/errors-handler';


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

 
  cliente : Cliente;
  ocultarR: boolean = true;
  ocultarA: boolean = true;
  image: string = null;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    private camera: Camera,
    private errorHandler: ErrorsHandlerProvider,  ) {
     
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
    this.navCtrl.push(HomePage);
  }

  registrarCliente(){
    if(this.validar()){
    

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
