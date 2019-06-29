import { Component, OnInit } from '@angular/core';
import { Pedido, EstadosPedido } from '../../../models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from 'src/app/models/user';
import { ErrorHandlerService } from 'src/app/services/error-handler/error-handler.service';
import { ActivatedRoute } from '@angular/router';
import { AuthFireService } from '../../../services/auth.service';

@Component({
  selector: 'app-toma-pedido',
  templateUrl: './toma-pedido.page.html',
  styleUrls: ['./toma-pedido.page.scss'],
})
export class TomaPedidoPage implements OnInit {

  pedidosList: Pedido[];
  pedidoSeleccionado: Pedido;
  pedidoEnPreparacion: Pedido;
  usuario: any;
  mostrarCargarTiempo: boolean;
  mode: string;

  constructor(private pedidoService: PedidoService, private errorHandler: ErrorHandlerService,
    private authService: AuthService, private activatedRoute: ActivatedRoute, private authFireService: AuthFireService) {

    this.usuario = this.authService.token();
    console.log(this.usuario);

    if (document.URL.includes('autorizar')) {
      this.mode = 'autorizar';
    } else if (document.URL.includes('servir')) {
      this.mode = 'servir';
    }

    if (this.usuario.tipo == "Delivery") {
      this.listarDelivery();
    }
    else {
      this.actualizarListaPedidos();
    }
  }

  ngOnInit() {
  }

  public listarDelivery() {
    this.pedidoService.ListarPorDelivery(this.authFireService.getCurrentUserMail())
      .subscribe(pedidos => {
        this.pedidosList = pedidos;
      })
  }

  public actualizarListaPedidos() {
    this.mostrarCargarTiempo = false;
    this.pedidoService.ListarTodos().subscribe(pedidos => {
      if (this.usuario.tipo != "Mozo") {
        this.pedidosList = pedidos.filter((p) => {
          return p.sector == this.usuario.tipo && (p.estado == EstadosPedido.Pendiente || p.estado == EstadosPedido.EnPreparacion)
            && p.id_mozo != 0;
        });
        this.pedidoSeleccionado = null;
        this.pedidoEnPreparacion = null;

        this.pedidosList.forEach(pedido => {
          console.log(pedido)
          if (pedido.estado == EstadosPedido.EnPreparacion && pedido.id_encargado == this.usuario.id) {
            this.pedidoEnPreparacion = pedido;
            this.pedidoSeleccionado = pedido;
            return;
          }
        });
      } else {
        if (this.mode == 'servir') {
          this.pedidosList = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.ListoParaServir;
          })
        } else {
          this.pedidosList = pedidos.filter(function (pedido) {
            return pedido.id_mozo == 0;
          })
        }
      }
    });
  }

  public tomarPedido(pedido: Pedido) {
    this.mostrarCargarTiempo = true;
    this.seleccionarPedido(pedido);
  }

  public entregarPedido(pedido: Pedido) {
    if (this.mode == 'servir') {
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
    } else {
      this.pedidoService.CambiarEstado(pedido.codigo, EstadosPedido.Pendiente, this.usuario.id)
        .then((res: any) => {
          if (res.Estado == 'OK') {
            this.errorHandler.mostrarMensajeConfimación("Pedido autorizado exitosamente.");
          } else {
            this.errorHandler.mostrarMensajeError(res.Mensaje);
          }
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

  public seleccionarPedido(pedido: Pedido) {
    this.pedidoSeleccionado = pedido;
  }

  public terminarPedido() {
    this.pedidoService.CambiarEstado(this.pedidoEnPreparacion.codigo, EstadosPedido.ListoParaServir)
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
