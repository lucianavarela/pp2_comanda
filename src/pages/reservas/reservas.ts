import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { User } from '../../Model/User';
import { MesaServiceProvider } from '../../providers/mesa-service/mesa-service';

/**
 * Generated class for the ReservasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html',
})


export class ReservasPage {

  usuario: User;
  mesas: any;
  listadoMesas :any;
  calendario: boolean;
  myDate: String;
  fechaHoy : Date;
  min:string;
  turnos: boolean;
  

  constructor(public navCtrl: NavController,
    public servicio: MesaServiceProvider,
    public navParams: NavParams) {
    this.usuario = new User();
    this.usuario = this.navParams.get('usuario');
    this.listadoMesas= new Array ();
    this.cargarMesas();
    this.calendario= true;
    this.myDate = new Date().toISOString();
    this.fechaHoy = new Date();
    this.turnos= true;
  
  
  }
  public form = [
    { val: '12:00', isChecked: false },
    { val: '13:00', isChecked: false },
    { val: '14:00', isChecked: false }
  ];

  ionViewDidLoad() {
    
  
   
  }

  cargarMesas(){

    return this.servicio.listar().
    subscribe((data) => { // Success
     this.listadoMesas =data;
     console.log(this.listadoMesas);   
   },(error) =>{
     console.error(error);
   }
   );

   
  }


  mesasClick(mesa){

    this.calendario= false;
    

  }

  seleccionarFecha(){
    this.turnos= false;
    
  }

  reservar(){

  }
  

  cancel(){
    this.navCtrl.push(HomePage);
  }

  
 

}
