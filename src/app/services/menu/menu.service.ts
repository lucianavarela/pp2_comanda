import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Menu } from '../../models/menu';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(public miHttp: HttpService) {
  }

  public Listar(): Observable<Menu[]> {
    return this.miHttp.httpGetO<Menu[]>('menu/listar/');
  }

  public GetMenu(nombre: string) {
    return this.Listar().pipe(
      map(menus => {
        return menus.filter((m) => { return m.nombre.toLowerCase() == nombre.toLowerCase() })[0];
      })
    );
  }

}
