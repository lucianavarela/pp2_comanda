import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { MesaService } from '../../services/mesa/mesa.service';
import { NavController } from '@ionic/angular';
import { Mesa, EstadosMesa } from '../../models/mesa';
import { ToastService } from 'src/app/services/toast/toast.service';

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
    private errorHandler: ToastService) { }

  ionViewWillEnter() {
    this.traerMesas();
  }

  traerMesas() {
    this.mesaService.Listar().subscribe(
      (res) => {
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
        this.errorHandler.confirmationToast('Mesa borrada exitosamente');
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
    this.mesaService.CambiarEstado(codigo, EstadosMesa.Cerrada).then(
      (res) => {
        this.errorHandler.confirmationToast('Mesa cerrada exitosamente');
        this.traerMesas()
      }
    )
  }

  atras() {
    this.navCtrl.navigateForward('home')
  }
}
