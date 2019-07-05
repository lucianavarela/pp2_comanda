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
        console.log(this.menosUsadas);        
      }
    )
 
    this.mesaService.MasImporte()
    .subscribe(
      (res) => {
        this.mayorImportes = res;        
        console.log(this.mayorImportes);        
      }
    )
 
    this.mesaService.MenosImporte()
    .subscribe(
      (res) => {
        this.menorImportes = res;        
        console.log(this.menorImportes);        
      }
    )

    this.mesaService.MasFacturada()
    .subscribe(
      (res) => {
        this.mayorFacturaciones = res;        
        console.log(this.mayorFacturaciones);        
      }
    )

    this.mesaService.MenosFacturada()
    .subscribe(
      (res) => {
        this.menosFacturaciones = res;        
        console.log(this.menosFacturaciones);        
      }
    )
 
    this.mesaService.MejorPuntuacion()
    .subscribe(
      (res) => {
        this.mejorPuntuaciones= res;        
        console.log(this.mejorPuntuaciones);        
      }
    )
 
    this.mesaService.PeorPuntuacion()
    .subscribe(
      (res) => {
        this.peorPuntuaciones= res;        
        console.log(this.peorPuntuaciones);        
      }
    )
  }


}
