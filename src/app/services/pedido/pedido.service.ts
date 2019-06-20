import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Pedido } from 'src/app/models/pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor(public miHttp: HttpService) {
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
<<<<<<< HEAD
    console.log(request);
=======
<<<<<<< HEAD
    console.log(request);
=======
>>>>>>> development
>>>>>>> 4a70db876622fa9da8ac067c08ee71be3f426845
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
