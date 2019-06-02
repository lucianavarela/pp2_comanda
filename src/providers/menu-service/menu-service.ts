import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpBaseProvider } from '../http-base/http-base'

/*
  Generated class for the MenuServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuServiceProvider {

  constructor(public menuHhttp: HttpBaseProvider) {
    console.log('Hello MenuServiceProvider Provider');
  }


  public listar(){
    return this.menuHhttp.httpGetP('menu/listar');
  }




}
