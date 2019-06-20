import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Cliente } from 'src/app/models/Cliente';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/login';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public miHttp: HttpService) { }

  public loguear(dataLogin: Login){
    
     return this.miHttp.httpPostL("clientes/login",dataLogin);
 
   }

  public alta(dataCliente: Cliente){

    return this.miHttp.httpPostL("clientes/registrarCliente",dataCliente);
  
    }

  public listarRegistrados(){
      return this.miHttp.httpGetL("clientes/listarClientesRegistrados");
    }

  

}
