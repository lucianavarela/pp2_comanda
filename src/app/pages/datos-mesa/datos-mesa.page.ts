import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Mesa } from 'src/app/models/mesa';

@Component({
  selector: 'app-datos-mesa',
  templateUrl: './datos-mesa.page.html',
  styleUrls: ['./datos-mesa.page.scss'],
})
export class DatosMesaPage implements OnInit {

  menosUsadas: any;
  mayorImportes: any;
  menorImportes: any;
  mayorFacturaciones: any;
  menosFacturaciones: any;
  mejorPuntuaciones: any;
  peorPuntuaciones: any;

  constructor(public navCtrl: NavController,
    public mesaService: MesaService,
    private errorHandler: ToastService) { }

  ngOnInit() {

  this.Cargar();
  }

  atras() {
    this.navCtrl.navigateForward('/home')
  }


  Cargar() {
    this.mesaService.MenosUsada()
    .subscribe(
      (res) => {
        this.menosUsadas = res;        
      }
    )
 
    this.mesaService.MasImporte()
    .subscribe(
      (res) => {
        this.mayorImportes = res;        
      }
    )
 
    this.mesaService.MenosImporte()
    .subscribe(
      (res) => {
        this.menorImportes = res;        
      }
    )

    this.mesaService.MasFacturada()
    .subscribe(
      (res) => {
        this.mayorFacturaciones = res;        
      }
    )

    this.mesaService.MenosFacturada()
    .subscribe(
      (res) => {
        this.menosFacturaciones = res;        
      }
    )
 
    this.mesaService.MejorPuntuacion()
    .subscribe(
      (res) => {
        this.mejorPuntuaciones= res;        
      }
    )
 
    this.mesaService.PeorPuntuacion()
    .subscribe(
      (res) => {
        this.peorPuntuaciones= res;        
      }
    )
  }


}
