import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SpinnerHandlerService } from 'src/app/services/spinner-handler/spinner-handler.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarioOnline: string = "";

  constructor(private navCtrl: NavController,
    private error: ErrorHandlerService,
    private autenticationService: AuthService,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerService,
    private authService: AuthService) {

  }

  ionViewWillEnter() {
    if (this.authService.isLogged()) {
      this.usuarioOnline = this.authService.getUserInfo().usuario;
    } else {
      this.navCtrl.navigateForward('login');
    }
  }

  cerrarSesionClick() {
    this.autenticationService.logout();
    this.navCtrl.navigateForward('login');
  }
}
