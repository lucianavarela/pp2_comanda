import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Mesa } from 'src/app/models/mesa';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  constructor(public miHttp: HttpService) { }

  public Listar(): Observable<Mesa[]> {
    return this.miHttp.httpGetO<Mesa[]>('mesas/listar/');
  }

  public Registrar(codigo: string, foto): Promise<any> {
    const request: Object = {
      codigo: codigo
    };
    return this.miHttp.httpPostP('mesas/registrar/', request).then( response => {
      if (foto) {
        return this.ActualizarFoto(codigo, foto).catch( error => {
          console.log(error);
          this.Eliminar(codigo);
        });
      }
    });
  }

  public Eliminar(codigo: String): Promise<Object> {
    return this.miHttp.httpDeleteP('mesas/' + codigo);
  }

  public ActualizarFoto(codigo: string, foto): Promise<Object> {
    const request: Object = {
      codigo: codigo,
      foto: foto
    };

    const json = JSON.stringify(request);
    return this.miHttp.httpPostP('mesas/foto/', request);
  }

  public CambiarEstadoEsperando(codigo: String): Promise<any> {
    return this.miHttp.httpGetP('mesas/estadoEsperando/' + codigo);
  }

  public CambiarEstadoComiendo(codigo: String): Promise<any> {
    return this.miHttp.httpGetP('mesas/estadoComiendo/' + codigo);
  }

  public CambiarEstadoPagando(codigo: String): Promise<any> {
    return this.miHttp.httpGetP('mesas/estadoPagando/' + codigo);
  }

  public CambiarEstadoCerrada(codigo: String): Promise<any> {
    return this.miHttp.httpGetP('mesas/estadoCerrada/' + codigo);
  }

  public Cobrar(codigo: String): Promise<any> {
    return this.miHttp.httpGetP('mesas/cobrar/' + codigo);
  }
}
