import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { SmartAudioService } from 'src/app/services/smart-audio/smart-audio.service';

@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.page.html',
  styleUrls: ['./iniciarsesion.page.scss'],
})
export class IniciarsesionPage implements OnInit {

  splash = true;
  loading: boolean = false;
  userSelect: string = "";
  selectUserOptions = { title: '' };

  dataLogin: Login;

  constructor(public platform: Platform,
    public audioService: SmartAudioService,
    public navCtrl: NavController,
    private authService: AuthService,
    private errorHandler: ErrorHandlerService,
    public alertCtrl: AlertController) {
    this.selectUserOptions.title = "Usuarios disponibles";
    this.audioService.preload('login', 'assets/sonidos/short2.mp3');
    this.dataLogin = new Login('', '');

  }

  ionViewDidLoad() {
  }

  singIn() {
    if (this.validForm()) {
      this.authService.Loguear(this.dataLogin)
        .then(response => {
          if (response['Estado'] === 'OK') {
            this.audioService.play('login');
            localStorage.setItem('token', response['Token']);
            this.navCtrl.navigateForward('home');
          } else {
            this.errorHandler.mostrarMensajeConfimación(response['Mensaje'], 'Error');
          }
        })
        .catch(err => {
          this.errorHandler.mostrarMensajeConfimación(err['Mensaje'], 'Error');
        })
    }
  }



  registerUser() {
    this.navCtrl.navigateForward('register');
  }

  private validForm() {
    if (this.dataLogin.user != '' && this.dataLogin.pass != '') {
      return true;
    } else {
      this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos", 'Error');

      return false;
    }


  }

  ////nuevo

  private validarF() {
    if (this.dataLogin.user != '' && this.dataLogin.pass != '') {
      return true;
    } else {
      //let alert = 
      this.alertCtrl.create({
        header: 'Error',
        message: "Debe llenar todos los campos",
        buttons: ['Aceptar'],
        cssClass: 'present-alert'
      });
      //alert.present();
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
        this.dataLogin = new Login('miguelito', 'mozo');

        break;
    }
  }

  ngOnInit() {
  }

}
