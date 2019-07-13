import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Pedido, EstadosPedido } from '../../models/pedido';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(public miHttp: HttpService,
    private notificationService: NotificationService) {
  }

  public ListarTodos(): Observable<Pedido[]> {
    return this.miHttp.httpGetO<Pedido[]>('pedido/listarTodos/');
  }

  public ListarPorMesa(codigoMesa: string): Observable<Pedido[]> {
    return this.miHttp.httpGetO<Pedido[]>('pedido/listarPorMesa/' + codigoMesa);
  }

  public ListarActivosPorSector(): Observable<Pedido[]> {
    return this.miHttp.httpGetO<Pedido[]>('pedido/listarActivos/');
  }

  public Registrar(idMesa: string, idMenu: number, nombreCliente: string, es_delivery: number, id_mozo: number = 0, direccion_delivery: string = '', fire_mail_cliente: string = ''): Promise<Object> {
    const request: Object = {
      id_mesa: idMesa,
      id_menu: idMenu,
      cliente: nombreCliente,
      es_delivery: es_delivery,
      direccion_delivery: direccion_delivery,
      id_mozo: id_mozo,
      fire_mail_cliente: fire_mail_cliente
    };

    if (es_delivery) {
      this.notificationService.save("Se realizó un nuevo pedido de delivery.", "Socio");
    }
    else {
      this.notificationService.save("Se realizó un nuevo pedido en la mesa " + idMesa, "Mozo");
    }

    return this.miHttp.httpPostP('pedido/registrar/', request);
  }

  public AutorizarTodosLosPedidos() {
    return this.miHttp.httpPostP('pedido/autorizarTodos/', {});
  }

  public Cancelar(codigo: string) {
    return this.miHttp.httpDeleteP('pedido/' + codigo);
  }

  public TomarPedido(codigo: string, minutosEstimados: string) {
    const request: Object = {
      codigo: codigo,
      minutosEstimados: minutosEstimados
    };
    return this.miHttp.httpPostP('pedido/tomarPedido/', request);
  }

  public Servir(codigo: string) {
    const request: Object = {
      codigo: codigo
    };
    return this.miHttp.httpPostP('pedido/servir/', request);
  }

  public CambiarEstado(pedido: Pedido, estado: string) {
    const request: Object = {
      codigo: pedido.codigo,
      estado: estado,
      id_mozo: pedido.id_mozo// ? mozo : 0
    };

    switch (estado) {
      case EstadosPedido.ListoParaServir:
        this.notificationService.save("El pedido " + pedido.codigo + " de la mesa " + pedido.mesa +
          "se encuentra listo para servir.", pedido.id_mozo.toString());
        this.notificationService.save("Su pedido de " + pedido.descripcion + " se encuentra listo para servir.", pedido.nombre_cliente);
        break;
      case EstadosPedido.Entregado:
        this.notificationService.save("Su pedido de " + pedido.descripcion + " fue entregado.", pedido.nombre_cliente);
        break;
      case EstadosPedido.EnPreparacion:
        this.notificationService.save("Su pedido de " + pedido.descripcion + " se encuentra en preparación.", pedido.nombre_cliente);
        break;
    }

    return this.miHttp.httpPostP('pedido/cambiarEstado/', request);
  }

  public ListarPorCliente(nombre_cliente: string, es_delivery: number): Observable<Pedido[]> {

    const request: Object = {
      nombre_cliente: nombre_cliente,
      es_delivery: es_delivery
    };

    return this.miHttp.httpPostO<Pedido[]>('pedido/listarPorCliente/', request);
  }

  public ListarPorDelivery(fire_mail_delivery: string): Observable<Pedido[]> {

    const request: Object = {
      fire_mail_delivery: fire_mail_delivery
    };

    return this.miHttp.httpPostO<Pedido[]>('pedido/listarPorDelivery/', request);
  }

  public UpdateDelivery(codigo: string, fire_mail_delivery: string) {
    const request: Object = {
      codigo: codigo,
      fire_mail_delivery: fire_mail_delivery
    };

    return this.miHttp.httpPostP('pedido/updateDelivery/', request);
  }
}
