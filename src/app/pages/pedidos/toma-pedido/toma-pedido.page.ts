import { Component, OnInit } from '@angular/core';
import { Pedido, EstadosPedido } from '../../../models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from 'src/app/models/user';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';

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

  constructor(private pedidoService: PedidoService, private errorHandler: ErrorHandlerService,
    private authService: AuthService) {
    this.usuario = this.authService.getUserInfo();
    console.log(this.usuario);
    this.actualizarListaPedidos();
  }

  ngOnInit() {
  }

  public actualizarListaPedidos() {
    this.mostrarCargarTiempo = false;
    this.pedidoService.ListarActivosPorSector().subscribe(pedidos => {
      if (this.usuario.tipo != "Mozo") {
        this.pedidosList = pedidos;
        this.pedidoSeleccionado = null;
        this.pedidoEnPreparacion = null;

        this.pedidosList.forEach(pedido => {
          if (pedido.estado == EstadosPedido.EnPreparacion && pedido.id_encargado == this.usuario.id) {
            this.pedidoEnPreparacion = pedido;
            this.pedidoSeleccionado = pedido;
            return;
          }
        });
      } else {
        this.pedidosList = pedidos.filter(function (pedido) {
          return pedido.estado == EstadosPedido.ListoParaServir;
        })
      }
    });
  }

  public tomarPedido(pedido: Pedido) {
    this.mostrarCargarTiempo = true;
    this.seleccionarPedido(pedido);
  }

  public entregarPedido(pedido: Pedido) {
    this.pedidoService.Servir(pedido.codigo)
      .then(response => {
        console.log(response);
        this.errorHandler.mostrarMensajeConfimación("Pedido servido exitosamente.");
      })
      .catch(error => {
        console.log(error);
        this.errorHandler.mostrarMensajeError("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }

  public seleccionarPedido(pedido: Pedido) {
    this.pedidoSeleccionado = pedido;
  }

  public terminarPedido() {
    this.pedidoService.MarcarListoParaServir(this.pedidoEnPreparacion.codigo)
      .then(response => {
        console.log(response);
        this.errorHandler.mostrarMensajeConfimación("Pedido marcado como listo para servir.");
      })
      .catch(error => {
        console.log(error);
        this.errorHandler.mostrarMensajeError("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }

  public cargarTiempo(tiempoEstimado: number) {
    this.pedidoService.TomarPedido(this.pedidoSeleccionado.codigo, tiempoEstimado.toString())
      .then(response => {
        console.log(response);
        this.errorHandler.mostrarMensajeConfimación("Pedido tomado exitosamente.");
      })
      .catch(error => {
        console.log(error);
        this.errorHandler.mostrarMensajeError("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }
}
