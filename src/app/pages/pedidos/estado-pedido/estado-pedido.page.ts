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
  pedidosList: Pedido[] = null;
  mesa: string;
  cliente: any = null;
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
    if (this.usuario.tipo == 'registrado' || this.usuario.tipo == 'anonimo') {
      this.clienteService.TraerCliente(this.usuario.id)
        .then((cliente: any) => {
          this.cliente = cliente;
          if (this.usuario.mesa) {
            this.traerPedidos(this.cliente.mesa);
          } else {
            this.errorHandler.errorToast('Debe estar ingresado en una mesa para realizar pedidos');
            this.navCtrl.navigateForward('/home');
          }
        });
    } else {
      this.atras();
    }
  }

  traerPedidos(mesa: string) {
    this.pedidoService.ListarPorMesa(mesa).subscribe(
      (res) => {
        this.pedidosList = res;
      });
  }

  confirmarEntrega(pedido: Pedido) {
    this.pedidoService.CambiarEstado(pedido, EstadosPedido.Finalizado)
      .then((res: any) => {
        if (res.Estado == 'OK') {
          this.errorHandler.confirmationToast("Pedido confirmado exitosamente.");
          this.cliente.monto = this.cliente.monto ? parseFloat(this.cliente.monto) + parseFloat(pedido.importe) : parseFloat(pedido.importe);
          this.clienteService.CargarMonto(this.usuario).subscribe(
            (res) => {
              this.pedidoService.ListarPorMesa(this.cliente.mesa).subscribe(
                (res) => {
                  this.pedidosList = res;
                  if (this.pedidosList.length == 0) {
                    this.mesaService.CambiarEstado(this.cliente.mesa, EstadosMesa.Comiendo);
                  }
                });
            });
        } else {
          this.errorHandler.errorToast(res.Mensaje);
        }
      })
      .catch(error => {
        this.errorHandler.errorToast(error);
      });
  }

  cancelarPedido(pedido: Pedido) {
    this.pedidoService.Cancelar(pedido.codigo)
      .then((res: any) => {
        this.errorHandler.confirmationToast("Pedido cancelado exitosamente.");
        this.pedidoService.ListarPorMesa(this.cliente.mesa).subscribe(
          (res) => {
            this.pedidosList = res;
            if (this.pedidosList.length == 0) {
              if (this.cliente.monto && this.cliente.monto > 0) {
                this.mesaService.CambiarEstado(this.cliente.mesa, EstadosMesa.Comiendo).then(
                  () => this.traerPedidos(this.cliente.mesa)
                );
              } else {
                this.mesaService.CambiarEstado(this.cliente.mesa, EstadosMesa.Asignada).then(
                  () => this.traerPedidos(this.cliente.mesa)
                );
              }
            }
          });
      })
      .catch(error => {
        this.errorHandler.errorToast(error);
      });
  }

  atras() {
    this.navCtrl.navigateForward('/home')
  }
}
