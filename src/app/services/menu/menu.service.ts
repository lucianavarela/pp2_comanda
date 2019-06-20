import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../http/http.service';
import { Menu } from 'src/app/models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  constructor(public miHttp: HttpService) {
  }

  public Listar(): Observable<Menu[]> {
    return this.miHttp.httpGetO<Menu[]>('menu/listar/');
  }
}
