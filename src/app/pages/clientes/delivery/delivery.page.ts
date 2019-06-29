import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { MenuService } from '../../../services/menu/menu.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';
import { Mesa } from '../../../models/mesa';
import { MesaService } from '../../../services/mesa/mesa.service';
import { Menu } from '../../../models/menu';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Pedido } from 'src/app/models/pedido';
import { ToastService } from '../../../services/toast/toast.service';
import { AuthFireService } from '../../../services/auth.service';
 
declare var google;


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit{

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address:string;
  
  mesas: Mesa[] = [];
  menus: Menu[] = [];
  menus_cargados: Menu[] = [];
  usuario: User;
  mesa: string;
  cliente: string;
  pedidosCliente: Pedido[];
  manualAddress: boolean;
  addressMessage: string;
  pedidoSeleccionado: Pedido;

  constructor(
    private navCtrl: NavController,
    private pedidoService: PedidoService,
    private menuService: MenuService,
    private mesaService: MesaService,
    private auth: AuthService,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private toastService: ToastService,
    private authFireService: AuthFireService
  ) {
    this.usuario = this.auth.getUserInfo();
    this.manualAddress = false;
  }

  cargarListas() {
    this.pedidoSeleccionado = null;
    this.pedidoService.ListarPorCliente(this.cliente, 1)
    .subscribe(pedidos => {
      this.pedidosCliente = pedidos;
      console.log(this.pedidosCliente);
    },
    error => {
      this.toastService.errorToast(error);
    });
  }

  ngOnInit() {
    this.loadMap();
  }

  ionViewWillEnter() {
  
    this.traerMenus();
   
    if (this.usuario.tipo == 'registrado') {
      this.cliente = this.usuario.usuario;
    }
    console.log(this.cliente);
    this.cargarListas();
  }

  traerMenus() {
    this.menuService.Listar().subscribe(
      (res) => {
        this.menus = res;
      });
  }

  agregarMenu(id: number) {
    let index = this.menus.findIndex(x => x.id == id);
    this.menus_cargados.push(this.menus[index]);
    this.menus_cargados = this.menus_cargados.sort((a: Menu, b: Menu) => {
      if (a.nombre > b.nombre) {
        return 1;
      }
      if (a.nombre < b.nombre) {
        return -1;
      }
      return 0;
    });
  }

  eliminarMenu(id: number) {
    let index = this.menus_cargados.findIndex(x => x.id == id);
    this.menus_cargados.splice(index, 1);
  }

  generarPedido() {
    console.log(this.menus_cargados);
    console.log(this.address);
    if (this.menus_cargados.length == 0) {
      this.toastService.errorToast("Debe seleccionar al menos un pedido.");
      return;
    }

    if (!this.address) {
      this.toastService.errorToast("Ingrese la dirección.");
      return;
    }

    this.menus_cargados.forEach((menu) => {
      this.pedidoService.Registrar("MES00", menu.id, this.cliente, 1, this.address, 0, this.authFireService.getCurrentUserMail()).then(
        respuesta => { 
          console.log(respuesta);         
          this.toastService.confirmationToast("Pedido realizado correctamente.");
          this.cargarListas();
        }
      )
      .catch(error => {
        this.toastService.errorToast(error);
      });
    });
  }

  atras() {
    this.navCtrl.pop();
  }

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      this.map.addListener('tilesloaded', () => {
        console.log('accuracy',this.map);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });
 
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
 
  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords "+lattitude+" "+longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
 
    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.addressMessage = "";
        this.manualAddress = false;
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if(value.length>0)
          responseAddress.push(value);
 
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value+", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) =>{ 
        this.addressMessage = "Direccion no disponible! Ingrese manualmente: ";
        this.manualAddress = true;
      });
 
  }

  public chatOnClick() {
    this.navCtrl.navigateForward('chat');
  }

  public seleccionarPedido(pedido: Pedido) {
    this.pedidoSeleccionado = pedido;
  }

  




}
