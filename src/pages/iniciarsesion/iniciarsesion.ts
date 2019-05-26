import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController, Platform } from 'ionic-angular';
import { HomePage } from './../home/home';
import { RegistrarsePage } from './registrarse';
import { NativeAudio } from '@ionic-native/native-audio';
import { Login } from '../../Model/Login';
import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';
import { AuthService } from '../../providers/authentication-service/auth.service';

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
    private authService: AuthService,
    private errorHandler: ErrorsHandlerProvider,
    public alertCtrl: AlertController) {
    this.selectUserOptions.title = "Usuarios disponibles";

    this.nativeAudio.preloadComplex('inicio', 'assets/sonidos/inicio.mp3', 1, 1, 0);
    this.dataLogin = new Login('','');
 
  }

  ionViewDidLoad() {
  }

  singIn() {
    if(this.validForm()){
      this.authService.Loguear(this.dataLogin)
        .then(response => {      
          if (response['Estado'] === 'OK') {
            localStorage.setItem('token', response['Token']);            
            this.navCtrl.setRoot(HomePage);  
          } else {
            this.errorHandler.mostrarMensajeConfimación(response['Mensaje'],'Error' );
          }     
        })
        .catch(err=>{
          this.errorHandler.mostrarMensajeConfimación(err['Mensaje'],'Error' );
        })
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
      this.dataLogin = new Login('admin', 'admin');                   
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
