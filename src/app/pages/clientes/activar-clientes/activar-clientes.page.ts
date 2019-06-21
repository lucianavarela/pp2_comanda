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
    private miHttp: ClienteService) {
    this.cargarClientes();
  }

  ngOnInit() {
  }

  cargarClientes() {

    this.miHttp.Listar().
      subscribe(
        (res) => {
          this.empleados = res;
          console.log(this.empleados);
        });

  }

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
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }

}
