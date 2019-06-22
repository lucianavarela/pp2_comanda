import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { Pedido } from 'src/app/models/pedido';

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
  @Input() mostrarBotonTomar: boolean;

  constructor() {
    this.pedidoSeleccionado = new EventEmitter();
    this.pedidoTomado = new EventEmitter();
  }

  ngOnInit() {}

  public verDetalle(pedido: Pedido) {
    this.pedidoSeleccionado.emit(pedido);
  }

  public tomarPedido(pedido: Pedido) {
    this.pedidoTomado.emit(pedido);
  }
}
