import { Component, OnInit } from '@angular/core';
import { NavController,AlertController , NavParams} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthenticationServiceProvider } from './../../providers/authentication-service/authentication-service';
import { IniciarsesionPage } from './../iniciarsesion/iniciarsesion';
//import { ErrorsHandlerProvider } from '../../providers/errors-handler/errors-handler';
import { SpinnerHandlerProvider } from './../../providers/spinner-handler/spinner-handler';
import { User } from '../../Model/User';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage   implements OnInit {

  usuarioOnline: string = "usuario@usuario.com";
  logo: boolean;
  usuario: User;
  listadoIconos: Array <any> = new Array;

  listados: Array <any> = [
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
        nombre: "menu",
        imagen: "assets/imgs/home/menu.png",
        accion: "ClienteMenuPage"
    },
    {
      nombre: "juegos",
      imagen: "assets/imgs/home/juegos.png",
      accion: "JuegosHomePage"
  },
  ]






  constructor( private navCtrl : NavController,
    private MiAuth: AngularFireAuth,
    ////private error : ErrorsHandlerProvider,
    private autenticationService: AuthenticationServiceProvider,
    public alertCtrl: AlertController,
    private spinnerHandler: SpinnerHandlerProvider,
    private navParams : NavParams,
    public popoverCtrl: PopoverController) {
      this.usuario = new User();
      this.usuario = this.navParams.get('usuario');

   
  }

  ionViewDidLoad() {
    this.filtrar();
    //this.usuarioOnline = this.MiAuth.auth.currentUser.email;
    this.esconderLogo();
    console.log(this.usuario);  
  } 


  ngOnInit() {
    console.log("on init");    
  }


  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, { usuario: this.usuario});
    popover.present({
      ev: myEvent
    });
  }

 private esconderLogo(){
  if( this.listadoIconos.length >4){
    this.logo = true;
  }else{
    this.logo= false;
  }
 }

iconosClick(icono){
  this.navCtrl.push( icono.accion, { usuario: this.usuario});

}


  cerrarSesionClick(){
    this.autenticationService.logOut();
    this.navCtrl.push( IniciarsesionPage);

}

filtrar(){
 
    if( this.usuario.tipo =="registrado"){     
      this.listadoIconos = this.listados
      .filter( listado => listado.nombre == "clientes" || listado.nombre == "menu" || listado.nombre == "juegos" || listado.nombre == "reservas");
    }else if( this.usuario.tipo == "Cocinero" || this.usuario.tipo == "Cervecero" ||this.usuario.tipo =="Bartender" ){
      this.listadoIconos = this.listados
      .filter( listado => listado.nombre == "pedidos" );
    }else if(  this.usuario.tipo =="Socio"){
      this.listadoIconos = this.listados
    }
   
}




}
