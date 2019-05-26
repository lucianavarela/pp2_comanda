import { Injectable } from '@angular/core';
import { HttpBase } from './http-base/http-base.service';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';
import { Pedido } from '../Model/Pedido';

@Injectable()
export class PedidoService {
  constructor(public miHttp: HttpBase) {
  }

  public ListarPorMesa(codigoMesa: string): Observable<Pedido[]> {
    return this.miHttp.httpGetO<Pedido[]>('pedido/listarPorMesa/' + codigoMesa);
  }

  public ListarActivosPorSector(): Observable<Pedido[]> {
    return this.miHttp.httpGetO<Pedido[]>('pedido/listarActivos/');
  }

  public Registrar(idMesa: string, idMenu: number, nombreCliente: string): Promise<Object> {
    const request: Object = {
      id_mesa: idMesa,
      id_menu: idMenu,
      cliente: nombreCliente
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
