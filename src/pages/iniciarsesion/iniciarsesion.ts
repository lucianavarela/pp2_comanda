import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Platform, Spinner } from 'ionic-angular';
import { AuthenticationServiceProvider } from './../../providers/authentication-service/authentication-service';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';
import { HomePage } from './../home/home';
import { RegistrarsePage } from './registrarse';
import { NativeAudio } from '@ionic-native/native-audio';
import { Login } from '../../Model/Login';
import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';


/**
 * Generated class for the IniciarsesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciarsesion',
  templateUrl: 'iniciarsesion.html',
})
export class IniciarsesionPage {

  splash = true;
  loading: boolean = false;
  userSelect: string = "";
  selectUserOptions = { title: '' };

  dataLogin : Login;

  constructor(public platform: Platform,
    public nativeAudio: NativeAudio,
    public navCtrl : NavController,
    public navParams: NavParams,
    private autenticationService: AuthenticationServiceProvider,
    private errorHandler: ErrorsHandlerProvider,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerProvider,) {
    this.selectUserOptions.title = "Usuarios disponibles";

    this.nativeAudio.preloadComplex('inicio', 'assets/sonidos/inicio.mp3', 1, 1, 0);
    this.dataLogin = new Login('','');
 
  }

  ionViewDidLoad() {

  
    if(this.navParams.get('fromApp')){
      this.splash = false;
    }else{
      setTimeout(() => {
        this.splash = false;
      }, 4000);
    }  
  
  }

  singIn() {
    if(this.validForm()){
      let spiner = this.spinnerHandler.presentLoadingCustom();
       spiner.present();
      this.autenticationService.singIn(this.dataLogin.user, this.dataLogin.pass)
        .then(rerponse => {      
         
        this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
        })
        .catch(err=>{
          this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar",'Error' );
        })
        spiner.dismiss();
    }  
      
  }



  registerUser() {
  this.navCtrl.setRoot(RegistrarsePage)
  }

  private validForm(){
    if(this.dataLogin.user != '' && this.dataLogin.pass != ''){
      return true;
    }else{
      this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos",'Error');
      
    return false;
    }  

    
  }

  play(){
    this.nativeAudio.play('inicio'); 
  }


  ////nuevo

  private validarF(){
    if(this.dataLogin.user != '' && this.dataLogin.pass != ''){
      return true;
    }else{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: "Debe llenar todos los campos",
        buttons: ['Aceptar'],
        cssClass:'present-alert'
      });
      alert.present();
      return false;
    }
  
    
  }



CargarDefault(tipo: string) {
  
  switch (tipo) {
    case 'S':
     /* this.dataLogin.user = 'admin';
      this.dataLogin.pass = 'admin';    */ 
      this.dataLogin.user = "admin@admin.com";
      this.dataLogin.pass = "123456";
      this.singIn(); 
          
      break;
    case 'B':
      this.dataLogin = new Login('Matias', '1234');      
           
      break;
    case 'CE':
      this.dataLogin = new Login('cervecero', 'cervecero');
     
     break;
    case 'CO':
      this.dataLogin = new Login('cocinero', 'cocinero');
      
      break;
    case 'M':
      this.dataLogin = new Login('mozo', 'mozo');
     
      break;
  }
}



}
