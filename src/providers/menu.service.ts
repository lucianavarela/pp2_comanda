import { Menu } from './../Model/Menu';
import { Injectable } from '@angular/core';
import { HttpBase } from './http-base/http-base.service';
import { Observable } from 'rxjs';
import { map, tap, catchError, timeInterval } from 'rxjs/operators';

@Injectable()
export class MenuService {

  constructor(public miHttp: HttpBase) {
  }

  public Listar(): Observable<Menu[]> {
    return this.miHttp.httpGetO<Menu[]>('menu/listar/');
  }

}
