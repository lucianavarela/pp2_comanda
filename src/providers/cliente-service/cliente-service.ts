import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpBaseProvider } from '../http-base/http-base';
import { Cliente } from '../../Model/Cliente';

/*
  Generated class for the ClienteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClienteServiceProvider {

  constructor(public miHttp: HttpBaseProvider) {
    console.log('Hello ClienteServiceProvider Provider');
  }

  public alta(dataCliente: Cliente){

   return this.miHttp.httpPosts("clientes/registrarCliente",dataCliente);
 
   }

}
