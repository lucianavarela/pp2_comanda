import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../../Model/Login';
//import { HTTP } from '@ionic-native/http/ngx';


/*
  Generated class for the HttpBaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpBaseProvider {

  //urlBase: String = 'https://restaurante-cerizza.herokuapp.com/';
  //urlBase: String = 'http://kq000525.ferozo.com/comanda/';
  urlBase: String = 'http://kq000525.ferozo.com/API_Comanda/'


  constructor(//public http: HTTP
    public https:HttpClient 
   ) {
    console.log('Hello HttpBaseProvider Provider');
  }

  public httpGetP ( url: string) {
    return this.https.get(this.urlBase+url);  
    
  }

  public httpPost(url: string, data :Login){

    return this.https.post(this.urlBase+url,data);
    }

    public httpPosts(url: string, data :any){

      return this.https.post(this.urlBase+url,data);
      }

}
