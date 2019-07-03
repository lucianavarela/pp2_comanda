import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Cliente } from 'src/app/models/cliente';
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
    private clienteService: ClienteService) {
    this.cargarClientes();
  }

  ngOnInit() {
  }

  cargarClientes() {

    this.clienteService.ListarTodos().
      subscribe(
        (res) => {
          this.empleados = res;
        });

  }

 

  borrar(id: number) {
    this.clienteService.Baja(id).then(
      (res) => {
        this.cargarClientes()
      }
    )
  }

  activar(id: number) {   
    this.clienteService.Activar(id)
    .then(
      (res) => {
        this.cargarClientes()
      }
    )
  }

  suspender(id: number) {
    this.clienteService.Suspender(id).then(
      (res) => {
        this.cargarClientes()
      }
    )
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }

}
