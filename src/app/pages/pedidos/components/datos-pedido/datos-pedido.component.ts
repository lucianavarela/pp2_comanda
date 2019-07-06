<<<<<<< HEAD
import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ToastService } from 'src/app/services/toast/toast.service';
import { ClienteService } from 'src/app/services/cliente/cliente.service';
=======
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Pedido, EstadosPedido } from 'src/app/models/pedido';
import { PedidoService } from 'src/app/services/pedido/pedido.service';
import { ToastService } from 'src/app/services/toast/toast.service';
>>>>>>> 57b102bcdc47b6e5377272ddc06798112d80ad0c

@Component({
  selector: 'app-datos-pedido',
  templateUrl: './datos-pedido.component.html',
  styleUrls: ['./datos-pedido.component.scss'],
})
export class DatosPedidoComponent implements OnChanges {

  @Output() pedidoConfirmado: EventEmitter<Pedido>;
  @Input() pedido: Pedido;
  foto: string;

<<<<<<< HEAD
  constructor(private pedidoService: PedidoService, private errorHandler: ToastService,
    private clienteService: ClienteService) {
    this.pedidoConfirmado = new EventEmitter();
  }

  ngOnChanges() {
    if (this.pedido) {
      this.clienteService.GetClienteByUsername(this.pedido.nombre_cliente).subscribe(cliente => {
        if (cliente.foto != 'sin_foto.png') {
          this.foto = cliente.foto;
        } else {
          this.foto = '/assets/imgs/' + cliente.foto;
        }
      });
    }
  }

  confirmarEntrega(pedido: Pedido) {
=======
  constructor(private pedidoService: PedidoService, private errorHandler: ToastService) {
    this.pedidoConfirmado = new EventEmitter();
  }

  ngOnInit() { }

  confirmarEntrega(pedido:Pedido) {
>>>>>>> 57b102bcdc47b6e5377272ddc06798112d80ad0c
    this.pedidoConfirmado.emit(pedido);
  }
}
