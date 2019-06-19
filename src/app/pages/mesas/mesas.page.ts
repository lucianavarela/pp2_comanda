import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { NavController } from '@ionic/angular';
import { Mesa } from 'src/app/models/mesa';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.page.html',
  styleUrls: ['./mesas.page.scss'],
})
export class MesasPage {
  mesas: Mesa[] = [];

  constructor(
    public navCtrl: NavController,
    public mesaService: MesaService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ionViewWillEnter() {
    this.traerMesas();
  }

  traerMesas() {
    this.mesaService.Listar().subscribe(
      (res) => {
        console.log(res);
        this.mesas = res;
      });
  }

  crear() {
    let codigo = prompt('Ingrese el codigo de la mesa', 'MES');
    this.mesaService.Registrar(codigo, null).then(
      (res) => {
        this.traerMesas()
      }
    )
  }

  borrar(codigo: string) {
    this.mesaService.Eliminar(codigo).then(
      (res) => {
        this.traerMesas()
      }
    )
  }

  cobrar(codigo: string) {
    this.mesaService.Cobrar(codigo).then(
      (res) => {
        this.cerrar(codigo);
      }
    )
  }

  cerrar(codigo: string) {
    this.mesaService.CambiarEstadoCerrada(codigo).then(
      (res) => {
        this.traerMesas()
      }
    )
  }

  atras() {
    this.navCtrl.pop();
  }
}
