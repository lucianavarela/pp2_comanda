import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Espera } from 'src/app/models/espera';
import { EsperaService } from 'src/app/services/espera/espera.service';

@Component({
  selector: 'app-lista-espera',
  templateUrl: './lista-espera.page.html',
  styleUrls: ['./lista-espera.page.scss'],
})
export class ListaEsperaPage implements OnInit {
  
  listas : Espera[] = [];

  constructor(public esperaServicio: EsperaService,
    private navCtrl: NavController) { 
      this.traerTodas()
    }

  ngOnInit() {
  }

  traerTodas(){
    this.esperaServicio.Listar().
    subscribe(
      (res) => {
        this.listas = res;
        console.log(this.listas);
      });
  }

  borrar(id: number) {
    console.log(id);
   this.esperaServicio.Baja(id)
    .then(
      (res) => {
        this.traerTodas();
      }
    )
  }

  volver(){
    this.navCtrl.navigateForward('home');
  }

}
