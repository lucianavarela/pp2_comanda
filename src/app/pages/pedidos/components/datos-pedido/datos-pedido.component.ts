import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from 'src/app/models/pedido';

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss'],
})
export class DatosPedidoComponent implements OnInit {

  @Input() pedido: Pedido;

  constructor() { }

  ngOnInit() {}

}
