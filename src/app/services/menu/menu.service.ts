import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Menu } from '../../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(public miHttp: HttpService) {
  }

  public Registrar(nombre: string, tipo: number, precio: number, tiempo_promedio: number, descripcion: string, fotos: string[]): Promise<any> {
    const request: Object = {
      nombre: nombre,
      id_sector: tipo,
      precio: precio,
      tiempo_promedio: tiempo_promedio,
      descripcion: descripcion,
      fotos: fotos
    };

    console.log(request);
    return this.miHttp.httpPostP('menu/registrar/', request);
  }

  public Listar(): Observable<Menu[]> {
    return this.miHttp.httpGetO<Menu[]>('menu/listar/');
  }
}
