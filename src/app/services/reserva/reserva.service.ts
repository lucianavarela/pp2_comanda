import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Reserva } from 'src/app/models/reserva';
import { Cliente } from 'src/app/models/Cliente';
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

  public ListarTodos(): Observable<Reserva[]> {
    return this.miHttp.httpGetOL<Reserva[]>('reservas/listar');
  }

  public ReservaXMesa(codigo: string): Promise<Object> {
    return this.miHttp.httpGetPL('reservas/reservasPorMesa/' + codigo);
  }
}
