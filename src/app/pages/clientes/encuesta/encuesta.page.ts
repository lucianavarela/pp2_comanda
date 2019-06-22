import { Component, OnInit } from '@angular/core';
import { Mesa } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { NavController } from '@ionic/angular';
import { Encuesta } from 'src/app/models/encuesta';
import { ToastService } from 'src/app/services/toast/toast.service';
import { EncuestaService } from 'src/app/services/encuesta/encuesta.service';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.page.html',
  styleUrls: ['./encuesta.page.scss'],
})
export class EncuestaPage implements OnInit {

  mesas: Mesa[] = [];
  puntuacion_mesa: number;
  puntuacion_restaurante: number;
  puntuacion_mozo: number;
  puntuacion_cocinero: number;
  comentario:string;
  fecha: Date;
  encuesta: Encuesta;
  
  

  constructor(private mesaService: MesaService,
    private navCtrl: NavController, private miHttp : EncuestaService,
    private toasterService: ToastService) { 
    this.puntuacion_restaurante=1;
    this.encuesta = new Encuesta();
    this.encuesta.puntuacionCocinero=1;
    this.encuesta.puntuacionMesa=1;
    this.encuesta.puntuacionMozo=1;
    this.encuesta.puntuacionRestaurante= 1;
    
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
        
    this.mesaService.Listar().subscribe(
      (res) => {
        this.mesas = res;
      }
    )
   
  }

  listarEncuesta(){
    this.miHttp.Listar().subscribe(
      (res) => {
        console.log( res);
      }
    )
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }

  Enviar(){

  if(this.encuesta.codigoMesa== "" || this.encuesta.comentario == "" )
  {
    this.toasterService.errorToast("debe completar todos los campos");
    console.log(this.encuesta);
   
  }else{
    this.encuesta.idMozo= 72;
    this.encuesta.puntuacionRestaurante= 2;
    /*this.miHttp.Registrar(this.encuesta.codigoMesa,id,this.encuesta.puntuacionMesa,1, 
      this.encuesta.puntuacionMozo,this.encuesta.puntuacionCocinero,this.encuesta.comentario,'22/06/19').*/
    this.miHttp.Enviar(this.encuesta).
      then(response => {
        if (response['Estado'] === 'OK') {
          this.toasterService.confirmationToast(response['mensaje']);
         
        } else {
          this.toasterService.errorToast(response['Mensaje']);
        }
      })
      .catch(err => {
        this.toasterService.errorToast(err['Mensaje']);
      })
    
      

    console.log(this.encuesta);
  }
}


}
