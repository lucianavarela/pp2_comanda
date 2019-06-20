import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Cliente } from '../../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public miHttp: HttpService) { }

  public alta(dataCliente: Cliente){

    return this.miHttp.httpPostL("clientes/registrarCliente",dataCliente);
  
    }

  public listarRegistrados(){
      return this.miHttp.httpGetL("clientes/listarClientesRegistrados");
    }

  

}
