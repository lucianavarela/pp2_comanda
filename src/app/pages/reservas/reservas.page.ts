import { Component, OnInit } from '@angular/core';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { Mesa } from 'src/app/models/mesa';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { NavController, NavParams } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {
  
  usuarioOnline: any;// User;
  listadoMesas  :Mesa[] = [];
  calendario: boolean= true;
  myDate: String;
  fechaHoy : Date;
  min:string;
  turnos: boolean=true;
  reservas: any;
  elegida: string ;
  reserva: Reserva;
  clientes:any;
  flagCliente: boolean= true;
  flagMesa: boolean= true;

  constructor( private servicioMesa :  MesaService,
    private authService: AuthService,
    public reservaServicio: ReservaService,
    public clienteServicio : ClienteService,
    private errorHandler: ErrorHandlerService,
    private navCtrl: NavController) {
    this.myDate = new Date().toISOString().substring(0, 10);
    this.fechaHoy = new Date();    
    this.reserva= new Reserva();
    
    
   }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    console.log(  this.usuarioOnline);
    /*
  if (this.authService.isLogged()) {
      this.usuarioOnline = this.authService.getUserInfo();
    } else {
      this.navCtrl.navigateForward('login');
    }*/
    this.cargarCliente();
    //this.cargarMesas();
    //this.reserva.id_usuario= this.usuarioOnline.id; 
  }

  cargarCliente(){
    if(this.usuarioOnline.tipo=="Mozo"){
      return this.clienteServicio.listarRegistrados().
      subscribe((data) => { // Success
      this.clientes =data;     
      console.log(data);
      //this.cargarMesas();
      this.flagCliente= false; 
    },(error) =>{
      console.error(error);
      this.errorHandler.mostrarMensajeConfimación("Se produjo un error al mostrar las reservas ",'Error' );
      
    }
    );
    }else{
      this.reserva.id_usuario= this.usuarioOnline.id;
      
      console.log(this.reserva);
      this.cargarMesas();
    }
  
  }

  cargarMesas(){
    this.flagMesa= false;
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

      volver(){
        this.navCtrl.navigateForward('home');
      }
  
    
    
  

}
