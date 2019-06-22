import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
<<<<<<< HEAD
import { Reserva } from 'src/app/models/Reserva';
import { Cliente } from 'src/app/models/Cliente';
import { Observable } from 'rxjs';
=======
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(public miHttp: HttpService) { }


  public listarReservasLibres(data: Object){

    return this.miHttp.httpPostL("reservas/reservasLibres",data);
  
    }

    public reserverMesa(data: Object){

      return this.miHttp.httpPostL("reservas/reservarMesa",data);
    
      }



<<<<<<< HEAD
      public ListarTodos(): Observable<Reserva[]> {
        return this.miHttp.httpGetOL<Reserva[]>('reservas/listar');
      }

      public ReservaXMesa(codigo: string): Promise<Object> {
        return this.miHttp.httpGetPL('reservas/reservasPorMesa/' + codigo);
      }


=======
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
}
