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


  public listarActivaciones(){
    return this.miHttp.httpGetL("clientes/listarActivaciones");
  }

  public ActivarCliente(dataCliente: Cliente){

    return this.miHttp.httpPostL("clientes/activarCliente",dataCliente);
  
    }

    public Activar(dataLogin: Cliente){
    
      return this.miHttp.httpPostL("clientes/activarCliente",dataLogin);
  
    }

    
    public Listar(): Observable<Cliente[]> {
      return this.miHttp.httpGetOL<Cliente[]>('clientes/listarActivaciones');
    }
  

}
