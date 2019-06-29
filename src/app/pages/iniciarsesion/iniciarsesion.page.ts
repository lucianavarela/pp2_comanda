import { Component, OnInit } from '@angular/core';
import { Login } from '../../models/login';
import { AuthService } from '../../services/auth/auth.service';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { Platform, NavController } from '@ionic/angular';
import { SmartAudioService } from '../../services/smart-audio/smart-audio.service';
import { ToastService } from 'src/app/services/toast/toast.service';

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
    private errorHandler: ErrorHandlerService) {

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
            this.errorHandler.mostrarMensajeError(response['Mensaje']);
          }
        })
        .catch(err => {
          this.errorHandler.mostrarMensajeError(err['Mensaje']);
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
      this.errorHandler.mostrarMensajeError("Debe llenar todos los campos");

      return false;
    }


  }

  private validarF() {
    if (this.dataLogin.user != '' && this.dataLogin.pass != '') {
      return true;
    } else {
      this.errorHandler.mostrarMensajeError("Debe llenar todos los campos");
      return false;
    }


  }



  CargarDefault(tipo: string) {

    switch (tipo) {
      case 'S':
        this.dataLogin = new Login('admin', 'admin');
        this.singIn();
        break;
      case 'B':
        this.dataLogin = new Login('Matias', '1234');
        this.singIn();
        break;
      case 'CE':
        this.dataLogin = new Login('cervecero', 'cervecero');
        this.singIn();
        break;
      case 'CO':
        this.dataLogin = new Login('cocinero', 'cocinero');
        this.singIn();
        break;
      case 'M':
        this.dataLogin = new Login('mozo', 'mozo');
        this.singIn();
        break;
        case 'D':
        this.dataLogin = new Login('leandro', 'leandro');
        this.singIn();
        break;
    }
  }

  ngOnInit() {
  }

  volver() {
    this.navCtrl.navigateForward('bienvenido');
  }

}
