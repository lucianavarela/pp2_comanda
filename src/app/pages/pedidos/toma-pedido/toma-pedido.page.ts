import { Component, OnInit } from '@angular/core';
import { Pedido, EstadosPedido } from '../../../models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { AuthService } from '../../../services/auth/auth.service';
import { User } from 'src/app/models/user';
import { AuthFireService } from '../../../services/auth.service';
import { NavController } from '@ionic/angular';
import { EstadosMesa } from 'src/app/models/mesa';
import { MesaService } from 'src/app/services/mesa/mesa.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';

@Component({
  selector: 'app-toma-pedido',
  templateUrl: './toma-pedido.page.html',
  styleUrls: ['./toma-pedido.page.scss'],
})
export class TomaPedidoPage implements OnInit {

  pedidosList: Pedido[] = null;
  pedidoSeleccionado: Pedido;
  pedidoEnPreparacion: Pedido;
  usuario: any;
  mostrarCargarTiempo: boolean;
  mode: string = '';

  constructor(private pedidoService: PedidoService, private errorHandler: ToastService, private mesaService: MesaService,
    private authService: AuthService, private navCtrl: NavController, private authFireService: AuthFireService,
    private clienteService: ClienteService) {

    this.usuario = this.authService.token();

    if (document.URL.includes('autorizar')) {
      this.mode = 'autorizar';
    } else if (document.URL.includes('servir')) {
      this.mode = 'servir';
    } else if (document.URL.includes('deliveryboy')) {
      this.mode = 'deliveryboy';
    }
    this.actualizarListaPedidos();
  }

  ngOnInit() {
  }

  public listarDelivery() {
    this.pedidoService.ListarPorDelivery(this.authFireService.getCurrentUserMail())
      .subscribe(pedidos => {
        this.pedidosList = pedidos.filter((p) => {
          return p.estado != EstadosPedido.Cancelado && p.estado != EstadosPedido.Finalizado
        });
      })
  }

  public actualizarListaPedidos() {
    this.mostrarCargarTiempo = false;
    this.pedidoService.ListarTodos().subscribe(pedidos => {
     
      if (this.usuario.tipo != "Mozo" && this.usuario.tipo != "Socio" && this.mode == '') {
        this.pedidosList = pedidos.filter((p) => {
          return p.sector == this.usuario.tipo && (p.estado == EstadosPedido.Pendiente || p.estado == EstadosPedido.EnPreparacion)
            && p.id_mozo != 0 ;
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
      } else if (this.usuario.tipo == "Socio" ) {
        this.pedidosList = pedidos.filter(function (pedido) {
         return pedido.estado == EstadosPedido.Pendiente && pedido.id_mozo == 0  && pedido.es_delivery == 1;
        })}
      else 
      {
        if (this.mode == 'servir') {
          this.pedidosList = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.ListoParaServir && pedido.es_delivery == 0;
          })
        } else if (this.mode == 'deliveryboy') {
          let pedidos_siento_repartidos = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.Entregado && pedido.es_delivery == 1;
          })
          if (pedidos_siento_repartidos.length == 0) {
            this.pedidosList = pedidos.filter(function (pedido) {
              return pedido.estado == EstadosPedido.ListoParaServir && pedido.es_delivery == 1;
            })
          } else {
            this.errorHandler.errorToast('Aún tenes entregas no finalizadas')
          }
        }
         else 
        {
          this.pedidosList = pedidos.filter(function (pedido) {
            return pedido.estado == EstadosPedido.Pendiente && pedido.id_mozo == 0 && pedido.es_delivery == 0 ;
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
          this.errorHandler.confirmationToast("Pedido servido exitosamente.");
        })
        .catch(error => {
          this.errorHandler.errorToast("Ocurrió un error.");
        })
        .finally(() => {
          this.actualizarListaPedidos();
        });
    } else if (this.mode == 'autorizar' ) {
      this.pedidoService.CambiarEstado(pedido, EstadosPedido.Pendiente)
        .then((res: any) => {
          if (res.Estado == 'OK') {
            this.errorHandler.confirmationToast("Pedido autorizado exitosamente.");
          } else {
            this.errorHandler.errorToast(res.Mensaje);
          }
        })
        .catch(error => {
          this.errorHandler.errorToast("Ocurrió un error.");
        })
        .finally(() => {
          this.actualizarListaPedidos();
        });
    } else {
      this.pedidoService.CambiarEstado(pedido, EstadosPedido.Entregado)
        .then((res: any) => {
          if (res.Estado == 'OK') {
            this.errorHandler.confirmationToast("Pedido tomado exitosamente.");
            this.pedidoService.UpdateDelivery(pedido.codigo, this.authFireService.getCurrentUserMail())
              .then(() => {
                this.navCtrl.navigateForward('/chat');
              });
          } else {
            this.errorHandler.errorToast(res.Mensaje);
          }
        })
        .catch(error => {
          this.errorHandler.errorToast("Ocurrió un error.");
        });
    }
  }

  public seleccionarPedido(pedido: Pedido) {
    this.pedidoSeleccionado = pedido;
  }

  public terminarPedido() {
    this.pedidoService.CambiarEstado(this.pedidoEnPreparacion, EstadosPedido.ListoParaServir)
      .then(response => {
        this.errorHandler.confirmationToast("Pedido marcado como listo para servir.");
      })
      .catch(error => {
        this.errorHandler.errorToast("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }

  public cargarTiempo(tiempoEstimado: number) {
    this.pedidoService.TomarPedido(this.pedidoSeleccionado.codigo, tiempoEstimado.toString())
      .then(response => {
        this.errorHandler.confirmationToast("Pedido tomado exitosamente.");
      })
      .catch(error => {
        this.errorHandler.errorToast("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }

  public autorizarTodos() {
    this.pedidoService.AutorizarTodosLosPedidos()
      .then(response => {
        this.errorHandler.confirmationToast("Pedidos autorizados exitosamente.");
      })
      .catch(error => {
        this.errorHandler.errorToast("Ocurrió un error.");
      })
      .finally(() => {
        this.actualizarListaPedidos();
      });
  }

  cancelarPedido(pedido: Pedido) {
    this.pedidoService.Cancelar(pedido.codigo)
      .then((res: any) => {
        this.errorHandler.confirmationToast("Pedido cancelado exitosamente.");
        this.pedidoService.ListarPorMesa(pedido.mesa).subscribe(
          (res) => {
            this.pedidosList = res;
            if (this.pedidosList.length == 0) {
              this.clienteService.GetClienteByUsername(pedido.nombre_cliente)
                .subscribe((cliente:any) => {
                  if (cliente.monto && (parseFloat(cliente.monto) > 0)) {
                    this.mesaService.CambiarEstado(cliente.mesa, EstadosMesa.Comiendo).then(
                      () => this.pedidoSeleccionado = null
                    );
                  } else {
                    this.mesaService.CambiarEstado(cliente.mesa, EstadosMesa.Asignada).then(
                      () => this.pedidoSeleccionado = null
                    );
                  }
                });
            }
          });
      })
      .catch(error => {
        this.errorHandler.errorToast(error);
      });
  }

  atras() {
    this.navCtrl.navigateForward('/home');
  }
}
