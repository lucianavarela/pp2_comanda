import { Component, OnInit } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationServiceProvider } from './../../providers/authentication-service/authentication-service';
import { IniciarsesionPage } from './../iniciarsesion/iniciarsesion';
//import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage   implements OnInit {

  usuarioOnline: string = "usuario@usuario.com";
  logo: boolean;
  
  


  constructor( private navCtrl : NavController,
    private MiAuth: AngularFireAuth,
    ////private error : ErrorsHandlerProvider,
    private autenticationService: AuthenticationServiceProvider,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerProvider) {


  }

  ionViewDidLoad() {
    this.usuarioOnline = this.MiAuth.auth.currentUser.email;
    this.esconderLogo();
    
   
  }

  


  ngOnInit() {
    console.log("on init");
  
    
  }


 private esconderLogo(){

  if( this.listadoIconos.length >4){
    this.logo = true;
  }else{
    this.logo= false;
  }
 }

  
  listadoIconos: Array <any> = [
    {
      nombre: "clientes",
      imagen: "assets/imgs/home/altacliente.png",
      accion: "AltaClientePage"
  },
  {
    nombre: "reservas",
    imagen: "assets/imgs/home/reserva.png",
    accion: "ReservasPage"
    },
    {
      nombre: "ahorcado",
      imagen: "assets/imgs/home/juegoPostre.png",
      accion: "JuegoPostrePage"
  },
    {
        nombre: "pedidos",
        imagen: "assets/imgs/home/pedidos.png",
        accion: "PedidosPage"
    },
    {
        nombre: "empleados",
        imagen: "assets/imgs/home/empleados.png",
        accion: "AltaSupervisorPage"
    },
    {
        nombre: "mesas",
        imagen: "assets/imgs/home/mesas.png",
        accion: "MesasPage"
    },
    {
        nombre: "menu",
        imagen: "assets/imgs/home/menu.png",
        accion: "ClienteMenuPage"
    }
]

iconosClick(icono){
  this.navCtrl.push( icono.accion);

}


  cerrarSesionClick(){
    this.autenticationService.logOut();
    this.navCtrl.push( IniciarsesionPage);

}



}
