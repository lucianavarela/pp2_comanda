import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { MesaService } from '../../../services/mesa/mesa.service';
import { Mesa } from 'src/app/models/mesa';
import { Pedido } from 'src/app/models/pedido';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

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
    private barcodeScanner: BarcodeScanner,
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
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.mesa= barcodeData.text;
      this.traerPedidos();
      }).catch(err => {
      console.log('Error', err);
      });

  }


  atras() {
    this.navCtrl.pop();
  }
}
