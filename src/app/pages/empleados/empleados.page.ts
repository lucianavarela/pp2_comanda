import { Component, OnInit } from '@angular/core';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { EmpleadoService } from 'src/app/services/empleado/empleado.service';
import { NavController } from '@ionic/angular';
import { Empleado } from 'src/app/models/empleado';

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
        this.empleados = res.filter(function(e){
          return e.estado != 'B';
        });
<<<<<<< HEAD
        console.log(res)
=======
>>>>>>> development
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
    this.navCtrl.pop();
  }
}
