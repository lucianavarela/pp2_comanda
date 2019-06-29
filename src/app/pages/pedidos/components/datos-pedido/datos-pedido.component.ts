import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ToastService } from 'src/app/services/toast/toast.service';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss'],
})
export class DatosPedidoComponent implements OnInit {

  @Output() pedidoConfirmado: EventEmitter<Pedido>;
  @Input() pedido: Pedido;

  constructor(private pedidoService: PedidoService, private errorHandler: ToastService) {
    this.pedidoConfirmado = new EventEmitter();
  }

  ngOnInit() { }

  confirmarEntrega(pedido:Pedido) {
    this.pedidoConfirmado.emit(pedido);
  }
}
