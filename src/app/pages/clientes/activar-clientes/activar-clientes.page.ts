import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
<<<<<<< HEAD
import { Cliente } from 'src/app/models/Cliente';
=======
import { Cliente } from 'src/app/models/cliente';
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
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

<<<<<<< HEAD
    this.miHttp.ListarTodos().
=======
    this.miHttp.Listar().
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
      subscribe(
        (res) => {
          this.empleados = res;
          console.log(this.empleados);
        });

  }

<<<<<<< HEAD
 

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
=======
  activar(id) {
    this.cliente.id = id;
    /* this.miHttp.Activar(this.cliente).
     subscribe( 
      (res) => {
        
        console.log(res);
        this.cargarClientes();
        
        });*/
    console.log(id);

  }

  suspender(id: number) {
    /*this.empleadoService.Suspender(id).then(
      (res) => {
        this.traerEmpleados()
      }
    )*/
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }

}
