import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { Mesa } from 'src/app/models/mesa';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
<<<<<<< HEAD
import { NavController, NavParams } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
=======
import { NavController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  
<<<<<<< HEAD
  usuarioOnline: any;// User;
=======
  usuarioOnline: User;
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
  listadoMesas  :Mesa[] = [];
  calendario: boolean;
  myDate: String;
  fechaHoy : Date;
  min:string;
  turnos: boolean;
  reservas: any;
  elegida: string ;
  reserva: Reserva;
  clientes:any;
  flagCliente: boolean= true;

  constructor( private servicioMesa :  MesaService,
    private authService: AuthService,
    public reservaServicio: ReservaService,
    public clienteServicio : ClienteService,
    private errorHandler: ErrorHandlerService,
<<<<<<< HEAD
    private activeroute : ActivatedRoute,
=======
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
    private navCtrl: NavController) {
    this.calendario= true;
    this.myDate = new Date().toISOString().substring(0, 10);
    this.fechaHoy = new Date();
    this.turnos= true;
    this.reserva= new Reserva();
    
    
   }

  ngOnInit() {
  }


  ionViewWillEnter() {
<<<<<<< HEAD
    this.usuarioOnline = this.authService.token();
    console.log( this.usuarioOnline);
    /*
  if (this.authService.isLogged()) {
      this.usuarioOnline = this.authService.getUserInfo();
    } else {
      this.navCtrl.navigateForward('login');
    }*/
=======
    if (this.authService.isLogged()) {
      this.usuarioOnline = this.authService.getUserInfo();
    } else {
      this.navCtrl.navigateForward('login');
    }
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
    this.cargarCliente();
    this.cargarMesas();
    //this.reserva.id_usuario= this.usuarioOnline.id; 
  }

  cargarCliente(){
    if(this.usuarioOnline.tipo=="Mozo"){
      return this.clienteServicio.listarRegistrados().
      subscribe((data) => { // Success
      this.clientes =data;     
      console.log(data);
<<<<<<< HEAD
      //this.cargarMesas();
=======
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
      this.flagCliente= false; 
    },(error) =>{
      console.error(error);
      this.errorHandler.mostrarMensajeConfimación("Se produjo un error al mostrar las reservas ",'Error' );
      
    }
    );
    }else{
      this.reserva.id_usuario= this.usuarioOnline.id;
<<<<<<< HEAD
      //this.cargarMesas();
=======
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
    }
  
  }

  cargarMesas(){
    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
        console.log(this.listadoMesas);
        });
        //console.log(this.listadoMesas);
      }

      mesasClick(mesa){

        this.calendario= false;
        this.reserva.codigo_mesa= mesa.codigo;
        console.log(this.reserva);      
    
      }
      seleccionarFecha(){
        this.turnos= false;
        this.reserva.fecha= this.myDate;
        return this.reservaServicio.listarReservasLibres(this.reserva).
        subscribe((data) => { // Success
        this.reservas =data;     
        console.log(data);
      },(error) =>{
        console.error(error);
        this.errorHandler.mostrarMensajeConfimación("Se produjo un error al mostrar las reservas ",'Error' );
        
      }
      );
        
      }
    
      selectedHora(data){
        this.reserva.hora= data.hora;
        this,this.reserva.id_reserva= data.id_reserva;
       
      }
    
      reservar(){
        console.log(this.reserva);
        return this.reservaServicio.reserverMesa(this.reserva).
        subscribe((data) => { // Success
          this.errorHandler.mostrarMensajeConfimación("Cargada para el dia: "+this.reserva.fecha+" a las: "+
          this.reserva.hora+"hs.",'Reserva' );
          this.cancel();   
        console.log(data);
      },(error) =>{
        console.error(error);
        this.errorHandler.mostrarMensajeConfimación("Se produjo un error al carga la reservas ",'Error' );
        
      }
      );
    
    
      }
      
      cancel(){
        this.navCtrl.navigateForward('home');
      }
  
    
    
  

}
