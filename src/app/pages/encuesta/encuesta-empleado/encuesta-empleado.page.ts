import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta/encuesta.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { EncuestaEmpleado } from 'src/app/models/encuestaEmpleado';

@Component({
  selector: 'app-encuesta-empleado',
  templateUrl: './encuesta-empleado.page.html',
  styleUrls: ['./encuesta-empleado.page.scss'],
})
export class EncuestaEmpleadoPage implements OnInit {

  encuestas: EncuestaEmpleado[] = [];

  constructor(private navCtrl: NavController, private miHttp : EncuestaService,
    private toasterService: ToastService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.listarEncuesta();   
  }

  listarEncuesta(){
    this.miHttp.ListarEmpleado().subscribe(
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
