import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss'],
})
export class DatosPedidoComponent implements OnChanges {

  usuario: any;
  @Output() pedidoConfirmado: EventEmitter<Pedido>;
  @Output() pedidoCancelado: EventEmitter<Pedido>;
  @Input() pedido: Pedido;
  foto: string = '';

  constructor(private pedidoService: PedidoService, private errorHandler: ToastService,
    private clienteService: ClienteService, private auth: AuthService) {
    this.usuario = this.auth.getUserInfo();
    this.pedidoConfirmado = new EventEmitter();
    this.pedidoCancelado = new EventEmitter();
  }

  ngOnChanges() {
    if (this.pedido) {
      this.clienteService.GetClienteByUsername(this.pedido.nombre_cliente).subscribe(cliente => {
        if (!(document.URL.includes('chat'))) {
          if (cliente != undefined && cliente.foto != 'sin_foto.png') {
            this.foto = cliente.foto;
          } else {
            this.foto = '/assets/imgs/sin_foto.png';
          }
        }
      });
    }
  }

  confirmarEntrega(pedido: Pedido) {
    this.pedidoConfirmado.emit(pedido);
  }

  cancelarPedido(pedido: Pedido) {
    this.pedidoCancelado.emit(pedido);
  }
}
