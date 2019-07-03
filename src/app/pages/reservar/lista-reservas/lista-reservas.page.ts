import { Component, OnInit } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { 
  Reserva } from 'src/app/models/reserva';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.page.html',
  styleUrls: ['./lista-reservas.page.scss'],
})
export class ListaReservasPage implements OnInit {

  reservas: Reserva[] = [];

  constructor(public reservaServicio: ReservaService,
    private navCtrl: NavController) { 
      this.cargar();
    }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    

  }


  cargar(){
    this.reservaServicio.Listar().
    subscribe(
      (res) => {
        this.reservas = res;
      });
  }

  traerTodas(){
    this.reservaServicio.ListarTodos().
    subscribe(
      (res) => {
        this.reservas = res;
      });
  }

  borrar(id: number) {
    this.reservaServicio.Baja(id).then(
      (res) => {
        this.cargar();
      }
    )
  }

  activar(id: number) {   
    this.reservaServicio.Activar(id)
    .then(
      (res) => {
        this.cargar();
      }
    )
  }

  suspender(id: number) {
    this.reservaServicio.Suspender(id).then(
      (res) => {
        this.cargar();
      }
    )
  }

  volver(){
    this.navCtrl.navigateForward('home');
  }



}
