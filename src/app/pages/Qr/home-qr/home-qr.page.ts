import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastService } from 'src/app/services/toast/toast.service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EsperaService } from 'src/app/services/espera/espera.service';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { Mesa } from 'src/app/models/mesa';
import { Cliente } from 'src/app/models/cliente';

@Component({
  selector: 'app-home-qr',
  templateUrl: './home-qr.page.html',
})
export class HomeQrPage implements OnInit {

  listadoMesas  :Mesa[] = [];
  mesa : any;
  cliente : Cliente;
  usuarioOnline: any;
  listadoIconos: Array<any> = [
    {
      nombre: "Tomar Mesa",
      accion: "mesa"
    },
    {
      nombre: "Lista de espera",
      accion: "espera"
    },

  ]

  constructor(private errorHandler: ToastService,
    private navCtrl: NavController,
    public esperaServicio: EsperaService,
    private barcodeScanner: BarcodeScanner,
    private clienteService: ClienteService,
    private servicioMesa :  MesaService,
    private authService: AuthService) {
    this.mesa= new Mesa();
    this.cliente = new Cliente();
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.usuarioOnline = this.authService.token();
    this.cliente.id = this.usuarioOnline.id;
    console.log(this.usuarioOnline);
    this.scanQr();
   // this.cargarMesas();
   
  }

  Accion(qr: string) {
    if (qr == 'LISTA DE ESPERA') {
      this.esperaServicio.alta(this.usuarioOnline).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
          console.log(data);
        }, (error) => {
          console.error(error);
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
        });
    } else if (qr.indexOf('MESA-') > -1) {
      this.cliente.mesa = qr.replace('MESA-', '');
     // if(this.verificarMesa(this.usuarioOnline.mesa)){
        this.clienteService.CargarMesa(this.cliente).
        subscribe((data) => {
          this.errorHandler.confirmationToast(data["Mensaje"]);
        }, (error) => {
          this.errorHandler.errorToast("Se produjo un error al carga la lista ");
        });

     
     
    } else {
      this.errorHandler.errorToast("No es un Qr valido");
    }

    this.volver();
  }

  scanQr() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.Accion(barcodeData.text.toUpperCase());
    }).catch(e => {
      this.errorHandler.errorToast(e);
    });
  }

  cargarMesas(){
    
    this.servicioMesa.Listar().subscribe(
      (res) => {
        this.listadoMesas = res;
        console.log(this.listadoMesas);
        });
       
      }

  verificarMesa(cogido_mesa : string){
    let respuesta = false;
    this.mesa = this.listadoMesas
    .filter(listado => listado.codigo ==  cogido_mesa)
   if( this.mesa.estado == "Cerrada"){
  respuesta= true;
    }
    console.log(this.mesa);
    return respuesta
  }

  volver() {
    this.navCtrl.navigateForward('home');
  }
}
