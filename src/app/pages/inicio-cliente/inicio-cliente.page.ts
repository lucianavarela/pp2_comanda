import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { Platform, NavController, ToastController } from '@ionic/angular';
import { SmartAudioService } from 'src/app/services/smart-audio/smart-audio.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { AuthFireService } from '../../services/auth.service';
import { ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.page.html',
  styleUrls: ['./inicio-cliente.page.scss'],
})
export class InicioClientePage implements OnInit {

  splash = true;
  loading: boolean = false;
  userSelect: string = "";
  selectUserOptions = { title: '' };
  dataLogin: Login;


  constructor(public platform: Platform,
    public audioService: SmartAudioService,
    public navCtrl: NavController,
    private authService: ClienteService,
    private errorHandler: ErrorHandlerService,
    private authFireService: AuthFireService,
    private toastService: ToastService) {
    this.selectUserOptions.title = "Usuarios disponibles";
    this.audioService.preload('login', 'assets/sonidos/short2.mp3');
    this.dataLogin = new Login('', '');

  }

  ionViewDidLoad() {
  }

  singIn() {
    if (this.validForm()) {
      this.authService.loguear(this.dataLogin)
        .subscribe(response => {
          console.log(response);
          if (response['Estado'] === 'OK') {
            this.authFireService.login(this.dataLogin.user+'@gmail.com', '123456')
            .then(res => {
              console.log(res);
              this.audioService.play('login');
              localStorage.setItem('token', response['Token']);
              this.navCtrl.navigateForward('home');
            })
            .catch(error => {
              console.log(error);
              if (error.code === 'auth/user-not-found') {
                this.toastService.errorToast('Usuario no encontrado.');
              } else if (error.code === 'auth/wrong-password') {
                this.toastService.errorToast('Contraseña incorrecta.');
              } else {
                this.toastService.errorToast('Ocurrió un error, contáctese con el administrador.');
              }
            });
          } else {
            this.errorHandler.mostrarMensajeError(response['Mensaje']);
          }
          // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;
        }),
        (error) => {
          this.errorHandler.mostrarMensajeError("Se produjo un error al ingresar");
        }
    }
  }

  private registerUser() {
    this.navCtrl.navigateForward('alta-cliente');
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
        this.dataLogin = new Login('lelito31', '123456');
        this.singIn();
        break;
      case 'B':
        this.dataLogin = new Login('peter', '1234');
        this.singIn();
        break;
      case 'CE':
        this.dataLogin = new Login('ricardo', '1234');
        this.singIn();
        break;
      case 'CO':
        this.dataLogin = new Login('pedro', '1234');
        this.singIn();
        break;
    }
  }

  ngOnInit() {
  }

  atras() {
    this.navCtrl.navigateForward('bienvenido');
  }
}
