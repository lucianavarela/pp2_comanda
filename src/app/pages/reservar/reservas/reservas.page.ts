import { Component, OnInit } from '@angular/core';

import { NavController } from '@ionic/angular';

import { ActivatedRoute } from '@angular/router';
import { Mesa } from 'src/app/models/mesa';
import { Reserva } from 'src/app/models/reserva';
import { ToastService } from 'src/app/services/toast/toast.service';
import { User } from 'src/app/models/user';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ReservaService } from 'src/app/services/reserva/reserva.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage {
  
  usuarioOnline:  User;
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
    private toasterService: ToastService,
    private navCtrl: NavController) {
    this.myDate = new Date().toISOString().substring(0, 10);
    this.fechaHoy = new Date();    
    this.reserva= new Reserva();
    this.calendario= true;
    this.turnos= true;
    this.flagCliente= true;
    this.flagMesa= true;   
   }

  ngOnInit() {
  }


  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    console.log(  this.usuarioOnline);
   
    if(this.usuarioOnline.tipo === "registrado"){
    this.reserva.id_usuario= this.usuarioOnline.id;      
    console.log(this.reserva);
    this.cargarMesas();
   }else{
    this.cargarCliente();
   }
  
  }


  reset(){
    this.reserva.id_reserva= null;
    this.reserva.id_usuario = null;
    this.reserva.fecha= "";
    this.reserva.hora="";
    this.calendario= true;
    this.turnos= true;
    this.flagCliente= true;
    this.flagMesa= true; 
  }

  cargarCliente(){   
      this.clienteServicio.ListarTodos().
      subscribe((data) => { // Success
      this.clientes =data;     
      console.log(data)      
      this.flagCliente= false;       
    }
    );
    
  
  }

  cargarMesas(){
    
    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
        console.log(this.listadoMesas);
        });
        //console.log(this.listadoMesas);
        this.flagMesa= false;
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
        this.toasterService.errorToast("Se produjo un error al mostrar las reservas ");
        
        
      }
      );
        
      }
    
      selectedHora(data){
        this.reserva.hora= data.hora;
        this,this.reserva.id_reserva= data.id_reserva;
        console.log(this.reserva);
       
      }
    
      reservar(){
        console.log(this.reserva);
        return this.reservaServicio.reserverMesa(this.reserva).
        subscribe((data) => { // Success
          this.toasterService.confirmationToast( "Cargada para el dia: "+this.reserva.fecha+" a las: "+
          this.reserva.hora+"hs.");
          this.reset();
          this.cancel();   
        console.log(data);
      },(error) =>{
        console.error(error);
        this.toasterService.errorToast("Se produjo un error al carga la reservas ");
               
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
