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
    private navCtrl: NavController) { }

  ngOnInit() {
   
  }

  ionViewWillEnter() {
    this.cargar();

  }


  cargar(){
    this.reservaServicio.Listar().
    subscribe(
      (res) => {
        this.reservas = res;
        console.log(this.reservas);
        console.log(res);
      });
  }

  traerTodas(){
    this.reservaServicio.ListarTodos().
    subscribe(
      (res) => {
        this.reservas = res;
        console.log(this.reservas);
      });
  }

  volver(){
    this.navCtrl.navigateForward('home');
  }



}
