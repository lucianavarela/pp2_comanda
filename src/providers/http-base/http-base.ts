import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


/*
  Generated class for the HttpBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpBaseProvider {

  urlBase: String = 'https://restaurante-cerizza.herokuapp.com/';


  constructor(public http: HTTP) {
    console.log('Hello HttpBaseProvider Provider');
  }



}
