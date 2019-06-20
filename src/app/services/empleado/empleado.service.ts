import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from '../../models/empleado';
import { HttpService } from '../http/http.service';
import { OperacionesPorSector } from '../../models/operaciones_sector';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  constructor(public miHttp: HttpService) {
  }

  public Listar(): Observable<Empleado[]> {
    return this.miHttp.httpGetO<Empleado[]>('empleados/listar/');
  }

  public Registrar(usuario: string, password: string, nombre: string, tipo: string): Promise<Object> {
    const request: Object = {
      usuario: usuario,
      clave: password,
      nombre: nombre,
      tipo: tipo
    };
    return this.miHttp.httpPostP('empleados/registrarEmpleado/', request);
  }

  public Modificar(usuario: string, id: number, nombre: string, tipo: string): Promise<Object> {
    const request: Object = {
      id: id,
      usuario: usuario,
      nombre: nombre,
      tipo: tipo
    };
    return this.miHttp.httpPostP('empleados/modificar/', request);
  }

  public Baja(id: number): Promise<Object> {
    return this.miHttp.httpDeleteP('empleados/' + id);
  }

  public Activar(id: number): Promise<Object> {
    return this.miHttp.httpGetP('empleados/activar/' + id);
  }

  public Suspender(id: number): Promise<Object> {
    return this.miHttp.httpDeleteP('empleados/suspender/' + id);
  }

  public CambiarClave(newPassword: string): Promise<Object> {
    const request: Object = {
      clave: newPassword
    };
    return this.miHttp.httpPostP('empleados/cambiarClave/', request);
  }

  public CantidadOperacionesPorSector(): Observable<OperacionesPorSector[]> {
    return this.miHttp.httpGetO<OperacionesPorSector[]>('empleados/cantidadOperacionesPorSector');
  }
}
