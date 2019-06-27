import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EsperaService } from 'src/app/services/espera/espera.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-home-qr',
  templateUrl: './home-qr.page.html',
  styleUrls: ['./home-qr.page.scss'],
})
export class HomeQrPage implements OnInit {

  usuarioOnline: any;
  listadoIconos: Array<any> = [
    {
      nombre: "Tomar Mesa",
      accion: "mesa"
    },
    {
      nombre: "Lista de espera",
      accion: "espera"
    },

  ]

  constructor(private errorHandler: ToastService,
    private navCtrl: NavController,
    public esperaServicio: EsperaService,
    private barcodeScanner: BarcodeScanner,
    private clienteService: ClienteService,
    private authService: AuthService) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    console.log(this.usuarioOnline);
  }

  Accion(qr: string) {
    if (qr == 'LISTA DE ESPERA') {
      this.esperaServicio.alta(this.usuarioOnline).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
          console.log(data);
        }, (error) => {
          console.error(error);
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
        });
    } else if (qr.indexOf('MESA-') > -1) {
      this.usuarioOnline.mesa = qr.replace('MESA-', '');
      this.clienteService.CargarMesa(this.usuarioOnline).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
        }, (error) => {
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
        });
    } else {
      this.errorHandler.errorToast("No es un Qr valido");
    }
  }

  scanQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.Accion(barcodeData.text);
    }).catch(e => {
      this.errorHandler.errorToast(e);
    });
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }
}
