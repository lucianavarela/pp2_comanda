import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


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

  listadoMesas : Array<any>;
  calendario: boolean;
  myDate: String;
  fechaHoy : Date;
  min:string;

  

  constructor(public navCtrl: NavController,

    public navParams: NavParams) {
    this.listadoMesas= new Array(1,2,3,4,5,6,7,8,9,10,11,12);
    this.calendario= true;
    this.myDate = new Date().toISOString();
    this.fechaHoy = new Date();
    //this.min= this.fechaHoy.getFullYear()+"-"+this.fechaHoy.getMonth()+"-"+this.fechaHoy.getDate();
    
  
  
  }
  public form = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];

  ionViewDidLoad() {
   // console.log(this.fechaHoy.getFullYear()+"-"+this.fechaHoy.getUTCMonth()+"-"+this.fechaHoy.getDate());
    
  }


  mesasClick(mesa){

    this.calendario= false;
    

  }

  seleccionarFecha(){

    
  }
  
  
 

}
