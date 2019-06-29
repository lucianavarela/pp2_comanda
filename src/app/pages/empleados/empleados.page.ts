import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from '../../services/error-handler/error-handler.service';
import { EmpleadoService } from '../../services/empleado/empleado.service';
import { NavController } from '@ionic/angular';
import { Empleado } from '../../models/empleado';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})

export class EmpleadosPage {
  empleados: Empleado[] = [];

  constructor(
    public navCtrl: NavController,
    public empleadoService: EmpleadoService,
    private errorHandler: ErrorHandlerService,
  ) { }

  ionViewWillEnter() {
    this.traerEmpleados();
  }

  traerEmpleados() {
    this.empleadoService.Listar().subscribe(
      (res) => {
        this.empleados = res.filter(function (e) {
          return e.estado != 'B';
        });
        console.log(res);
      }
    )
  }

  borrar(id: number) {
    this.empleadoService.Baja(id).then(
      (res) => {
        this.traerEmpleados()
      }
    )
  }

  activar(id: number) {
    this.empleadoService.Activar(id).then(
      (res) => {
        this.traerEmpleados()
      }
    )
  }

  suspender(id: number) {
    this.empleadoService.Suspender(id).then(
      (res) => {
        this.traerEmpleados()
      }
    )
  }

  atras() {
    this.navCtrl.navigateForward('home')
  }
}
