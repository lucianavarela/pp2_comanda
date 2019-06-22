import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
<<<<<<< HEAD
=======
import { AuthService } from 'src/app/services/auth/auth.service';
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { Platform, NavController, AlertController } from '@ionic/angular';
import { SmartAudioService } from 'src/app/services/smart-audio/smart-audio.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

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
    public alertCtrl: AlertController) {
    this.selectUserOptions.title = "Usuarios disponibles";
    this.audioService.preload('login', 'assets/sonidos/short2.mp3');
    this.dataLogin = new Login('', '');

  }

  ionViewDidLoad() {
  }

  singIn() {
<<<<<<< HEAD
    if(this.validForm()){
     
      this.authService.loguear( this.dataLogin)
      .subscribe(response => {  
        console.log(response);
        if (response['Estado'] === 'OK') {
          this.audioService.play('login');
          localStorage.setItem('token', response['Token']);
          
          this.navCtrl.navigateForward('home'); 
        } else {
          this.errorHandler.mostrarMensajeConfimación(response['Mensaje'],'Error' );
        }        
         
       // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
        }),
        (error) =>{
          this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar",'Error' );
    
        }}        
    }  


=======
    if (this.validForm()) {
      this.authService.loguear(this.dataLogin)
        .subscribe(response => {
          console.log(response);
          if (response['Estado'] === 'OK') {
            this.audioService.play('login');
            localStorage.setItem('token', response['Token']);
            localStorage.setItem('dato', response['Token']);
            this.navCtrl.navigateForward('home');
          } else {
            this.errorHandler.mostrarMensajeConfimación(response['Mensaje'], 'Error');
          }
          // this.navCtrl.setRoot(HomePage , { usuario: rerponse }) ;       
        }),
        (error) => {
          this.errorHandler.mostrarMensajeConfimación("Se produjo un error al ingresar", 'Error');
        }
    }
  }
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9

  private registerUser() {
    this.navCtrl.navigateForward('alta-cliente');
  }

  private validForm() {
    if (this.dataLogin.user != '' && this.dataLogin.pass != '') {
      return true;
    } else {
      this.errorHandler.mostrarMensajeConfimación("Debe llenar todos los campos", 'Error');
<<<<<<< HEAD

      return false;
    }


  }

  play() {
    this.audioService.play('inicio');
  }


  ////nuevo

=======
      return false;
    }
  }

>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
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
<<<<<<< HEAD


  }



  CargarDefault(tipo: string) {

=======
  }

  CargarDefault(tipo: string) {
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
    switch (tipo) {
      case 'S':
        this.dataLogin = new Login('carlos', '1234');
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
<<<<<<< HEAD
      
=======
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
    }
  }

  ngOnInit() {
  }

  atras() {
    this.navCtrl.navigateForward('bienvenido');
<<<<<<< HEAD
    }
=======
  }
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
}
