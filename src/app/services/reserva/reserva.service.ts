import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

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



}
