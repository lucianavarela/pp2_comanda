import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { Cliente } from 'src/app/models/Cliente';
import { Login } from 'src/app/models/login';

=======
import { Login } from '../../models/login';
import { Cliente } from '../../models/cliente';
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public miHttp: HttpService) { }

  public loguear(dataLogin: Login) {
<<<<<<< HEAD

    return this.miHttp.httpPostL("clientes/login", dataLogin);

  }

  public alta(dataCliente: Cliente) {

    return this.miHttp.httpPostL("clientes/registrarCliente", dataCliente);

=======
    return this.miHttp.httpPostL("clientes/login", dataLogin);
  }

  public alta(dataCliente: Cliente) {
    return this.miHttp.httpPostL("clientes/registrarCliente", dataCliente);
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
  }

  public listarRegistrados() {
    return this.miHttp.httpGetL("clientes/listarClientesRegistrados");
  }

<<<<<<< HEAD


  public listarActivaciones(){
    return this.miHttp.httpGetL("clientes/listarActivaciones");
  }

  public ActivarCliente(dataCliente: Cliente){

    return this.miHttp.httpPostL("clientes/activarCliente",dataCliente);
  
    }

    
    public Activar(id: number): Promise<Object> {
      return this.miHttp.httpGetPL('clientes/activarCliente/' + id);
    }

    
    public Listar(): Observable<Cliente[]> {
      return this.miHttp.httpGetOL<Cliente[]>('clientes/listarActivaciones');
    }


    public ListarTodos(): Observable<Cliente[]> {
      return this.miHttp.httpGetOL<Cliente[]>('clientes/listar');
    }

    public Baja(id: number): Promise<Object> {
      return this.miHttp.httpDeletePL('clientes/' + id);
    }
    
    public Suspender(id: number): Promise<Object> {
      return this.miHttp.httpDeletePL('clientes/suspender/' + id);
    }
  

=======
  public listarActivaciones() {
    return this.miHttp.httpGetL("clientes/listarActivaciones");
  }

  public ActivarCliente(dataCliente: Cliente) {
    return this.miHttp.httpPostL("clientes/activarCliente", dataCliente);
  }

  public Activar(dataLogin: Cliente) {
    return this.miHttp.httpPostL("clientes/activarCliente", dataLogin);
  }

  public Listar(): Observable<Cliente[]> {
    return this.miHttp.httpGetOL<Cliente[]>('clientes/listarActivaciones');
  }
>>>>>>> 36842c07f72f71a041ec8512967f0933f1fe0ae9
}
