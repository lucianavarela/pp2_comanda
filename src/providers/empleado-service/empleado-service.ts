import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpBaseProvider } from '../http-base/http-base';
import { Login } from '../../Model/Login';

/*
  Generated class for the EmpleadoServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EmpleadoServiceProvider {

  constructor(public miHhttp: HttpBaseProvider) {
    console.log('Hello EmpleadoServiceProvider Provider');
  }


  public loguear(dataLogin: Login){

   // return this.miHhttp.httpPost("login",dataLogin);

    return this.miHhttp.httpPost("empleados/login",dataLogin);

  }

}
