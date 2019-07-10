import { Component, OnInit } from '@angular/core';
import { EncuestaEmpleado } from 'src/app/models/encuestaEmpleado';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { NavController } from '@ionic/angular';
import { EncuestaService } from 'src/app/services/encuesta/encuesta.service';
import { ImagesService } from 'src/app/services/fotos/images.service';

@Component({
  selector: 'app-llenar-encuesta',
  templateUrl: './llenar-encuesta.page.html',
  styleUrls: ['./llenar-encuesta.page.scss'],
})
export class LlenarEncuestaPage implements OnInit {

  encuesta: EncuestaEmpleado;
  usuarioOnline: User;

  constructor( private authService: AuthService, private  miHttp : EncuestaService,
    private toasterService: ToastService, private imageService: ImagesService,
    private navCtrl: NavController) { 
    this.encuesta = new EncuestaEmpleado();
    this.encuesta.puntaje = 1;
    }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();  
    this.encuesta.id_empleado= this.usuarioOnline.id;
    this.encuesta.sector = this.usuarioOnline.tipo;
    console.log(this.usuarioOnline);
  }

  volver() {
    this.navCtrl.navigateForward('/home');
  }

  Enviar(){
   // console.log( this.encuesta);

    if(this.encuesta.comentario == null || this.encuesta.foto == null )
    {
      this.toasterService.errorToast("debe completar todos los campos y/o sacar la foto");
     
    }else{
   this.miHttp.CargarEmpleado(this.encuesta).
        subscribe(response => {
          if (response['Estado'] === 'OK') {
            this.toasterService.confirmationToast(response['Mensaje']);
           
          } else {
            this.toasterService.errorToast(response['Mensaje']);
          }
        })   
    }
  }

  getPicture() {
    this.imageService.takePhoto()
      .then(res => {
        if (res !== 'No Image Selected') {
          this.encuesta.foto = 'data:image/jpg;base64,' + res;
        }
        else {
          this.toasterService.errorToast('No tomó la foto.');
        }
      })
      .catch(error => {
        this.toasterService.errorToast('Error: No se ha podido cargar la foto. ' + error.message);

      });

  }
  

}
