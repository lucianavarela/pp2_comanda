import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { Cliente } from '../../models/cliente';
import { Espera } from 'src/app/models/espera';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class EsperaService {

  constructor(public miHttp: HttpService) { }



  public alta(dataCliente: User) {
    return this.miHttp.httpPostL("espera/cargar", dataCliente);
  }

  public Listar(): Observable<Espera[]> {
    return this.miHttp.httpGetOL<Espera[]>('espera/listar');
  }

  public Baja(id: number): Promise<Object> {
    return this.miHttp.httpDeletePL('espera/sacar/' + id);
  }

  public Activar(id: number): Promise<Object> {
    return this.miHttp.httpGetPL('espera/activar/' + id);
  }


}
