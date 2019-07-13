import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs';
import { Login } from '../../models/login';
import { Cliente } from '../../models/cliente';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(public miHttp: HttpService) { }

  public loguear(dataLogin: Login) {
    return this.miHttp.httpPostL("clientes/login", dataLogin);
  }

  public alta(dataCliente: Cliente) {
    return this.miHttp.httpPostL("clientes/registrarCliente", dataCliente);
  }

  public listarRegistrados() {
    return this.miHttp.httpGetL("clientes/listarClientesRegistrados");
  }

  public listarActivaciones() {
    return this.miHttp.httpGetL("clientes/listarActivaciones");
  }

  public ActivarCliente(dataCliente: Cliente) {
    return this.miHttp.httpPostL("clientes/activarCliente", dataCliente);
  }

  public Activar(id: number): Promise<Object> {
    return this.miHttp.httpGetPL('clientes/activarCliente/' + id);
  }

  public Listar(): Observable<Cliente[]> {
    return this.miHttp.httpGetOL<Cliente[]>('clientes/listarActivaciones');
  }

  public GetClienteByUsername(usuario: string) {
    return this.ListarTodos().pipe(
      map(clientes => {
        return clientes.filter((c) => { return c.usuario == usuario })[0];
      })
    );
  }

  public GetClientedeMesa(mesa: string) {
    return this.ListarTodos().pipe(
      map(clientes => {
        return clientes.filter((c) => { return c.mesa == mesa })[0];
      })
    );
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

  public CargarMesa(dataCliente: Cliente) {
    return this.miHttp.httpPostL("clientes/Mesa", dataCliente);
  }

  public SacarMesa(mesa: string): Promise<Object> {
    return this.miHttp.httpDeletePL('clientes/Mesa/' + mesa);
  }

  public SacarDescuento(id: string): Promise<Object> {
    return this.miHttp.httpDeletePL('clientes/descuento/' + id);
  }

  public CargarDescuento(dataCliente: Cliente) {
    return this.miHttp.httpPostL("clientes/descuento", dataCliente);
  }

  public TraerDescuento(id: string): Promise<Object> {
    return this.miHttp.httpGetPL('clientes/descuento/' + id);
  }

  public TraerCliente(id: string): Observable<Object> {
    return this.miHttp.httpGetCO<Cliente>('clientes/traer/' + id);
  }

  //le paso un cliente con el id y el monto cargado
  public CargarMonto(dataCliente: Cliente) {
    console.log(dataCliente);
    return this.miHttp.httpPostL("clientes/monto", dataCliente);
  }
//le paso  el id 
  public SacarMonto(id: number): Promise<Object> {
    return this.miHttp.httpDeletePL('clientes/monto/' + id);
  }

}
