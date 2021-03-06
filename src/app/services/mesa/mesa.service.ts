import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Mesa, EstadosMesa } from '../../models/mesa';
import { Reserva } from 'src/app/models/reserva';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MesaService {
  constructor(public miHttp: HttpService) { }

  public Listar(): Observable<Mesa[]> {
    return this.miHttp.httpGetO<Mesa[]>('mesas/listar/');
  }

  public GetMesa(codigo_mesa: string) {
    return this.Listar().pipe(
      map(clientes => {
        return clientes.filter((m) => { return m.codigo == codigo_mesa })[0];
      })
    );
  }

  public Registrar(codigo: string, foto): Promise<any> {
    const request: Object = {
      codigo: codigo
    };
    return this.miHttp.httpPostP('mesas/registrar/', request).then( response => {
      if (foto) {
        return this.ActualizarFoto(codigo, foto).catch( error => {
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

  public CambiarEstado(codigo: String, estado: EstadosMesa): Promise<any> {
    const request: Object = {
      codigo: codigo,
      estado: estado
    };

    return this.miHttp.httpPostP('mesas/cambiarEstado/', request);
  }

  public Cobrar(codigo: String): Promise<any> {
    return this.miHttp.httpGetP('mesas/cobrar/' + codigo);
  }

 
  public MenosUsada(): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('mesas/MenosUsada/' );
  }

  public MasFacturada(): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('mesas/MasFacturacion/' );
  }
  public MenosFacturada(): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('mesas/MenosFacturacion/' );
  }

  public MasImporte(): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('mesas/ConFacturaConMasImporte/' );
  }

  public MenosImporte(): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('mesas/ConFacturaConMenosImporte/' );
  }

  public MejorPuntuacion(): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('mesas/ConMejorPuntuacion/' );
  }

  public PeorPuntuacion(): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('mesas/ConPeorPuntuacion/' );
  }

}
