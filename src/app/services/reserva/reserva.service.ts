import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Reserva } from 'src/app/models/reserva';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(public miHttp: HttpService) { }


  public listarReservasLibres(data: Object) {

    return this.miHttp.httpPostL("reservas/reservasLibres", data);

  }

  public reserverMesa(data: Object) {
    return this.miHttp.httpPostL("reservas/reservarMesa", data);
  }

  public Listar(): Observable<Reserva[]> {
    return this.miHttp.httpGetOL<Reserva[]>('reservas/listar');
  }

 /* public ReservaXMesa(codigo: string): Promise<Object> {
    return this.miHttp.httpGetPL('reservas/reservasPorMesa/' + codigo);
  }*/
  public ReservaXMesa(codigo: string) {
    return this.miHttp.httpGetL('reservas/reservasPorMesa/' + codigo);
  }

  public ListarTodos(): Observable<Reserva[]> {
    return this.miHttp.httpGetOL<Reserva[]>('reservas/listarTodas');
  }

  public Activar(id: number): Promise<Object> {
    return this.miHttp.httpGetPL('reservas/activar/' + id);
  }

  public Baja(id: number): Promise<Object> {
    return this.miHttp.httpDeletePL('reservas/' + id);
  }
  
  public Suspender(id: number): Promise<Object> {
    return this.miHttp.httpDeletePL('reservas/suspender/' + id);
  }

  public TraerCliente(id: number): Observable<Reserva> {
    return this.miHttp.httpGetOL<Reserva>('reservas/cliente/' + id);
  }
 

}
