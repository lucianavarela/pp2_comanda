import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { MenuService } from '../../../services/menu/menu.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from '../../../models/user';
import { Mesa, EstadosMesa } from '../../../models/mesa';
import { MesaService } from '../../../services/mesa/mesa.service';
import { Menu } from '../../../models/menu';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';
import { ToastService } from '../../../services/toast/toast.service';
import { AuthFireService } from '../../../services/auth.service';

declare var google;


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  address: string;
  total: number = 0;
  mesas: Mesa[] = [];
  menus: Menu[] = [];
  menus_cargados: any[] = [];
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
        this.pedidosCliente = pedidos.filter((p) => {
          return p.estado != EstadosPedido.Finalizado && p.estado != EstadosPedido.Cancelado
        });
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
    this.cargarListas();
  }

  traerMenus() {
    this.menuService.Listar().subscribe(
      (res) => {
        this.menus = res;
      });
  }

  agregarMenu(menu: Menu) {
    this.total += menu.precio;
    let index = this.menus_cargados.findIndex(x => x['menu'].id == menu.id);
    if (index > -1) {
      this.menus_cargados[index]['cantidad']++;
    } else {
      this.menus_cargados.push({
        'menu': menu,
        'cantidad': 1
      });
    }
  }

  eliminarMenu(menu: Menu) {
    this.total -= menu.precio;
    let index = this.menus_cargados.findIndex(x => x['menu'].id == menu.id);
    if (this.menus_cargados[index]['cantidad'] > 1) {
      this.menus_cargados[index]['cantidad']--;
    } else {
      this.menus_cargados.splice(index, 1);
    }
  }

  generarPedido() {
    if (!this.address) {
      this.toastService.errorToast("Ingrese la dirección.");
      return;
    }

    this.menus_cargados.forEach((item) => {
      this.pedidoService.Registrar("MES00", item.menu.id, this.cliente, 1, 0, this.address, this.authFireService.getCurrentUserMail()).then(
        respuesta => {
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
    this.navCtrl.navigateForward('/home')
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
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

    }).catch((error) => {
      this.toastService.errorToast(error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
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
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
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


  confirmarEntrega(pedido: Pedido) {
    this.pedidoService.CambiarEstado(pedido.codigo, EstadosPedido.Finalizado)
      .then((res: any) => {
        if (res.Estado == 'OK') {
          this.toastService.confirmationToast("Pedido entregado exitosamente.");
          this.atras();
        } else {
          this.toastService.errorToast(res.Mensaje);
        }
      })
      .catch(error => {
        this.toastService.errorToast(error);
      })
      .finally(() => {
        this.atras();
      });
  }


  cancelarPedido(pedido: Pedido) {
    this.pedidoService.Cancelar(pedido.codigo)
      .then((res: any) => {
        if (res.Estado == 'OK') {
          this.toastService.confirmationToast("Pedido cancelado exitosamente.");
          this.atras();
        } else {
          this.toastService.errorToast(res.Mensaje);
        }
      })
      .catch(error => {
        this.toastService.errorToast(error);
      })
      .finally(() => {
        this.atras();
      });
  }
}
