import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Pedido } from '../../models/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(public miHttp: HttpService) {
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

  public CambiarEstado(codigo: string, estado: string, mozo?: string) {
    const request: Object = {
      codigo: codigo,
      estado: estado,
      id_mozo: mozo// ? mozo : 0
    };
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
