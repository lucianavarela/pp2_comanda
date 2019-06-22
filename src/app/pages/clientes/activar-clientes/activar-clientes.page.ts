import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Cliente } from 'src/app/models/Cliente';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-activar-clientes',
  templateUrl: './activar-clientes.page.html',
  styleUrls: ['./activar-clientes.page.scss'],
})
export class ActivarClientesPage implements OnInit {

  cliente: Cliente;
  empleados: Cliente[] = [];

  constructor(private navCtrl: NavController,
    private miHttp: ClienteService) {
    this.cargarClientes();
  }

  ngOnInit() {
  }

  cargarClientes() {

    this.miHttp.ListarTodos().
      subscribe(
        (res) => {
          this.empleados = res;
          console.log(this.empleados);
        });

  }

 

  borrar(id: number) {
    this.miHttp.Baja(id).then(
      (res) => {
        this.cargarClientes()
      }
    )
  }

  activar(id: number) {   
    this.miHttp.Activar(id)
    .then(
      (res) => {
        this.cargarClientes()
      }
    )
  }

  suspender(id: number) {
    this.miHttp.Suspender(id).then(
      (res) => {
        this.cargarClientes()
      }
    )
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }

}
