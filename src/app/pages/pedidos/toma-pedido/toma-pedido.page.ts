import { Component, OnInit } from '@angular/core';
import { Pedido, EstadosPedido } from '../../../models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ToastService } from '../../../services/toast/toast.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-toma-pedido',
  templateUrl: './toma-pedido.page.html',
  styleUrls: ['./toma-pedido.page.scss'],
})
export class TomaPedidoPage implements OnInit {

  pedidosList: Pedido[];
  pedidoSeleccionado: Pedido;
  pedidoEnPreparacion: Pedido;
  usuario: User;
  mostrarCargarTiempo: boolean;

  constructor(private pedidoService: PedidoService, private toasterService: ToastService, private authService: AuthService) {
    this.usuario = this.authService.getUserInfo();
    console.log(this.usuario);
    this.actualizarListaPedidos();
  }

  ngOnInit() {
  }

  public actualizarListaPedidos() {
    this.mostrarCargarTiempo = false;
    this.pedidoService.ListarActivosPorSector().subscribe(pedidos => {
      this.pedidosList = pedidos;
      this.pedidoSeleccionado = null;
      this.pedidoEnPreparacion = null;

      this.pedidosList.forEach(pedido => {
        if(pedido.estado == EstadosPedido.EnPreparacion && pedido.id_encargado == this.usuario.id) {
          this.pedidoEnPreparacion = pedido;
          this.pedidoSeleccionado = pedido;
          return;
        }
      });
    });
  }

  public tomarPedido(pedido: Pedido) {
    this.mostrarCargarTiempo = true;
    this.seleccionarPedido(pedido);
  }

  public seleccionarPedido(pedido:Pedido) {
    this.pedidoSeleccionado = pedido;
  }

  public terminarPedido() {
    this.pedidoService.MarcarListoParaServir(this.pedidoEnPreparacion.codigo)
    .then(response => {
      console.log(response);
      this.toasterService.confirmationToast("Pedido marcado como listo para servir.");
    })
    .catch(error => {
      console.log(error);
      this.toasterService.errorToast("Ocurrió un error.");
    })
    .finally(() => {
      this.actualizarListaPedidos();
    });
  }

  public cargarTiempo(tiempoEstimado: number) {
    this.pedidoService.TomarPedido(this.pedidoSeleccionado.codigo, tiempoEstimado.toString())
    .then(response => {
      console.log(response);
      this.toasterService.confirmationToast("Pedido tomado exitosamente.");
    })
    .catch(error => {
      console.log(error);
      this.toasterService.errorToast("Ocurrió un error.");
    })
    .finally(() => {
      this.actualizarListaPedidos();
    });
  }
}
