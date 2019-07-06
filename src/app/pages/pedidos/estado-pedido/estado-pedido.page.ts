import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PedidoService } from '../../../services/pedido/pedido.service';
import { MesaService } from '../../../services/mesa/mesa.service';
import { Mesa, EstadosMesa } from 'src/app/models/mesa';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-estado-pedido',
  templateUrl: './estado-pedido.page.html',
  styleUrls: ['./estado-pedido.page.scss'],
})

export class EstadoPedidoPage {
  pedidosList: Pedido[] = [];
  mesa: string;
  cliente: string;
  usuario: any;

  constructor(
    private navCtrl: NavController,
    private pedidoService: PedidoService,
    private mesaService: MesaService,
    private barcodeScanner: BarcodeScanner,
    private authService: AuthService,
    private clienteService: ClienteService,
    private errorHandler: ToastService,
  ) {
  }

  ionViewWillEnter() {
    this.usuario = this.authService.token();
    if (this.usuario.tipo == 'registrado') {
      this.clienteService.GetCliente(this.usuario.id).subscribe(cliente => {
        if (cliente.mesa) {
          this.mesa = cliente.mesa;
          this.traerPedidos(this.mesa);
        } else {
          this.errorHandler.errorToast('Debe estar ingresado en una mesa para realizar pedidos');
          this.navCtrl.navigateForward('/home');
        }
      });
    }
  }

  traerPedidos(mesa: string) {
    this.pedidoService.ListarPorMesa(mesa).subscribe(
      (res) => {
        this.pedidosList = res.filter(function (p) {
          return p.estado != EstadosPedido.Finalizado && p.estado != EstadosPedido.Cancelado
        })
      });
  }

  confirmarEntrega(pedido: Pedido) {
    this.pedidoService.CambiarEstado(pedido.codigo, EstadosPedido.Finalizado)
      .then((res: any) => {
        if (res.Estado == 'OK') {
          this.errorHandler.confirmationToast("Pedido confirmado exitosamente.");
          this.pedidoService.ListarPorMesa(this.mesa).subscribe(
            (res) => {
              this.pedidosList = res.filter(function (p) {
                return p.estado != EstadosPedido.Finalizado && p.estado != EstadosPedido.Cancelado
              })
              if (this.pedidosList.length == 0) {
                this.mesaService.CambiarEstado(this.mesa, EstadosMesa.Comiendo).then(
                  () => this.atras()
                );
              }
            });
        } else {
          this.errorHandler.errorToast(res.Mensaje);
        }
      })
      .catch(error => {
        this.errorHandler.errorToast(error);
      })
      .finally(() => {
        this.traerPedidos(this.mesa);
      });
  }

  atras() {
    this.navCtrl.navigateForward('/home')
  }
}
