import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { MesaService } from '../../../services/mesa/mesa.service';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { Mesa } from 'src/app/models/mesa';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-estado-pedido',
  templateUrl: './estado-pedido.page.html',
  styleUrls: ['./estado-pedido.page.scss'],
})

export class EstadoPedidoPage {
  mesas: Mesa[] = [];
  pedidosList: Pedido[] = [];
  mesa: string;
  cliente: string;

  constructor(
    private navCtrl: NavController,
    private pedidoService: PedidoService,
    private mesaService: MesaService,
    private qrScanner: QRScanner
  ) {
  }

  ionViewWillEnter() {
    //this.scanQr();
    this.traerMesas();
  }

  traerPedidos() {
    this.pedidoService.ListarPorMesa(this.mesa).subscribe(
      (res) => {
        this.pedidosList = res
      });
  }

  traerMesas() {
    this.mesaService.Listar().subscribe(
      (res) => {
        this.mesas = res
      });
  }

  scanQr() {
    try {
      const ionApp = <HTMLElement>document.getElementsByTagName('ion-app')[0];
      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        if (text) {
          this.qrScanner.hide();
          scanSub.unsubscribe();
          ionApp.style.display = 'block';
          this.traerPedidos();
        }
      });
      this.qrScanner.show();
      ionApp.style.display = 'none';
    } catch (e) {
      console.log(e) // --> usar el alert/toast que vayamos a usar
    }
  }

  atras() {
    this.navCtrl.pop();
  }
}
