import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.scss'],
})
export class ListaPedidosComponent implements OnInit {

  @Input() pedidosList: Pedido[];
  pedido: Pedido;
  @Output() pedidoSeleccionado: EventEmitter<Pedido>;  
  @Output() pedidoTomado: EventEmitter<Pedido>;
  @Output() pedidoEntregado: EventEmitter<Pedido>;
  @Input() mostrarBotonTomar: boolean;
  @Input() paraEntregar: boolean;

  constructor() {
    this.pedidoSeleccionado = new EventEmitter();
    this.pedidoTomado = new EventEmitter();
    this.pedidoEntregado = new EventEmitter();
  }

  ngOnInit() {}

  public verDetalle(pedido: Pedido) {
    this.pedidoSeleccionado.emit(pedido);
  }

  public tomarPedido(pedido: Pedido) {
    if (pedido.estado == EstadosPedido.ListoParaServir) {
      this.pedidoEntregado.emit(pedido);
    } else {
      this.pedidoTomado.emit(pedido);
    }
  }
}
