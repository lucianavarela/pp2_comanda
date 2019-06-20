import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { SpinnerHandlerService } from 'src/app/services/spinner-handler/spinner-handler.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';

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
    private authService: AuthService,
    private qrScanner: QRScanner) {
  }

  scanQr() {
    try {
      const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        if (text) {
          this.qrScanner.hide();
          scanSub.unsubscribe();
          ionApp.style.display = 'block';
          console.log(text);
        }
      });
      this.qrScanner.show();
      ionApp.style.display = 'none';
    } catch (e) {
      this.alertCtrl.create({
        header: 'Error',
        message: e.message,
        buttons: ['OK'],
        cssClass: 'present-alert'
      });
    }
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
