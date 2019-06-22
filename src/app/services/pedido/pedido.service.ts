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

<<<<<<< HEAD
  public Registrar(idMesa: string, idMenu: number, nombreCliente: string): Promise<Object> {
    const request: Object = {
      id_mesa: idMesa,
      id_menu: idMenu,
      cliente: nombreCliente
=======
  public Registrar(idMesa: string, idMenu: number, nombreCliente: string, es_delivery: number): Promise<Object> {
    const request: Object = {
      id_mesa: idMesa,
      id_menu: idMenu,
      cliente: nombreCliente,
      es_delivery: es_delivery
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
    };
    return this.miHttp.httpPostP('pedido/registrar/', request);
  }

  public Cancelar(codigo: string) {
    return this.miHttp.httpDeleteP('pedido/' + codigo);
  }

  public TomarPedido(codigo: string, minutosEstimados: string) {
    const request: Object = {
      codigo: codigo,
      minutosEstimados: minutosEstimados
    };
    console.log(request);
    return this.miHttp.httpPostP('pedido/tomarPedido/', request);
  }

  public Servir(codigo: string) {
    const request: Object = {
      codigo: codigo
    };
    return this.miHttp.httpPostP('pedido/servir/', request);
  }

  public MarcarListoParaServir(codigo: string) {
    const request: Object = {
      codigo: codigo
    };
    return this.miHttp.httpPostP('pedido/listoParaServir/', request);
  }
}
