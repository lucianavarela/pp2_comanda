import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Empleado1 } from '../../Model/Empleado_1';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';
import { HomePage } from '../home/home';


/**
 * Generated class for the AltaSupervisorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alta-supervisor',
  templateUrl: 'alta-supervisor.html',
})
export class AltaSupervisorPage {

  supervisor : Empleado1;
  image: string;
 

  constructor(public navCtrl: NavController, public navParams: NavParams,private camera: Camera,
    private errorHandler: ErrorsHandlerProvider,) {
    this.supervisor = new Empleado1();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AltaSupervisorPage');
  }


  registrar(){
    if(this.validar()){
      
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


 cancel(){
    this.navCtrl.push(HomePage);
  }

  validar(){
    if(this.supervisor.nombre != '' && this.supervisor.apellido != '' && this.supervisor.dni != null && this.supervisor.cuil != null ){
      return true;
    }else{
      this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos",'Error');      
      return false;
    }
  }

}
