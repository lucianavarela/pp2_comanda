import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { NavController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta/encuesta.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Encuesta } from 'src/app/models/encuesta';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.page.html',
  styleUrls: ['./encuestas.page.scss'],
})
export class EncuestasPage implements OnInit {

  encuestas: Encuesta[] = [];

  constructor(private mesaService: MesaService,
    private navCtrl: NavController, private miHttp : EncuestaService,
    private toasterService: ToastService) { }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.listarEncuesta();   
  }
  listarEncuesta(){
    this.miHttp.Listar().subscribe(
      (res) => {
       this.encuestas= res;
       this.orderByDate();
      }
    )
  }

  volver() {
    this.navCtrl.navigateForward('/home');
  }

  private orderByDate(){
    this.encuestas.sort((a, b)=>{
      return a.fecha <=b.fecha ? -1:-1 
    })
  }

}
