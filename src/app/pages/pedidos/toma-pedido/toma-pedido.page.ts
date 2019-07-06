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
  mode: string = '';

  constructor(private pedidoService: PedidoService, private errorHandler: ErrorHandlerService,
    private authService: AuthService, private activatedRoute: ActivatedRoute, private authFireService: AuthFireService) {

    this.usuario = this.authService.token();

    if (document.URL.includes('autorizar')) {
      this.mode = 'autorizar';
    } else if (document.URL.includes('servir')) {
      this.mode = 'servir';
<<<<<<< HEAD
    } else if (document.URL.includes('deliveryboy')) {
      this.mode = 'deliveryboy';
=======
    } else if (document.URL.includes('delivery')) {
      this.mode = 'delivery';
>>>>>>> 57b102bcdc47b6e5377272ddc06798112d80ad0c
    }

    this.actualizarListaPedidos();
  }

  ngOnInit() {
  }

  public listarDelivery() {
    this.pedidoService.ListarPorDelivery(this.authFireService.getCurrentUserMail())
      .subscribe(pedidos => {
<<<<<<< HEAD
        this.pedidosList = pedidos.filter((p) => {
          return p.estado != EstadosPedido.Cancelado && p.estado != EstadosPedido.Finalizado
        });
=======
        this.pedidosList = pedidos;
>>>>>>> 57b102bcdc47b6e5377272ddc06798112d80ad0c
      })
  }

  public actualizarListaPedidos() {
    this.mostrarCargarTiempo = false;
    this.pedidoService.ListarTodos().subscribe(pedidos => {
      if (this.usuario.tipo != "Mozo" && this.mode == '') {
        this.pedidosList = pedidos.filter((p) => {
          return p.sector == this.usuario.tipo && (p.estado == EstadosPedido.Pendiente || p.estado == EstadosPedido.EnPreparacion)
            && p.id_mozo != 0;
        });
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
        if (this.mode == 'servir') {
          this.pedidosList = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.ListoParaServir && pedido.es_delivery == 0;
          })
<<<<<<< HEAD
        } else if (this.mode == 'deliveryboy') {
          let pedidos_siento_repartidos = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.Entregado && pedido.es_delivery == 1;
          })
          if (pedidos_siento_repartidos.length == 0) {
            this.pedidosList = pedidos.filter(function (pedido) {
              return pedido.estado == EstadosPedido.ListoParaServir && pedido.es_delivery == 1;
            })
          } else {
            this.errorHandler.mostrarMensajeError('Aún tenes entregas no finalizadas')
          }
=======
        } else if (this.mode == 'delivery') {
          this.pedidosList = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.ListoParaServir && pedido.es_delivery == 1;
          })
>>>>>>> 57b102bcdc47b6e5377272ddc06798112d80ad0c
        } else {
          this.pedidosList = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.Pendiente && pedido.id_mozo == 0;
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
          this.errorHandler.mostrarMensajeConfimación("Pedido servido exitosamente.");
        })
        .catch(error => {
          this.errorHandler.mostrarMensajeError("Ocurrió un error.");
        })
        .finally(() => {
          this.actualizarListaPedidos();
        });
    } else if (this.mode == 'autorizar') {
      this.pedidoService.CambiarEstado(pedido.codigo, EstadosPedido.Pendiente, this.usuario.id)
        .then((res: any) => {
          if (res.Estado == 'OK') {
            this.errorHandler.mostrarMensajeConfimación("Pedido autorizado exitosamente.");
          } else {
            this.errorHandler.mostrarMensajeError(res.Mensaje);
          }
        })
        .catch(error => {
          this.errorHandler.mostrarMensajeError("Ocurrió un error.");
        })
        .finally(() => {
          this.actualizarListaPedidos();
        });
    } else {
      this.pedidoService.CambiarEstado(pedido.codigo, EstadosPedido.Entregado, this.usuario.id)
        .then((res: any) => {
          if (res.Estado == 'OK') {
            this.errorHandler.mostrarMensajeConfimación("Pedido autorizado exitosamente.");
            this.pedidoService.UpdateDelivery(pedido.codigo, this.authFireService.getCurrentUserMail())
              .then(() => {
                this.actualizarListaPedidos();
              });
          } else {
            this.errorHandler.mostrarMensajeError(res.Mensaje);
          }
        })
        .catch(error => {
          this.errorHandler.mostrarMensajeError("Ocurrió un error.");
        });
    }
  }

  public seleccionarPedido(pedido: Pedido) {
    this.pedidoSeleccionado = pedido;
  }

  public terminarPedido() {
    this.pedidoService.CambiarEstado(this.pedidoEnPreparacion.codigo, EstadosPedido.ListoParaServir)
      .then(response => {
        this.errorHandler.mostrarMensajeConfimación("Pedido marcado como listo para servir.");
      })
      .catch(error => {
        this.errorHandler.mostrarMensajeError("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }

  public cargarTiempo(tiempoEstimado: number) {
    this.pedidoService.TomarPedido(this.pedidoSeleccionado.codigo, tiempoEstimado.toString())
      .then(response => {
        this.errorHandler.mostrarMensajeConfimación("Pedido tomado exitosamente.");
      })
      .catch(error => {
        this.errorHandler.mostrarMensajeError("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }
}
