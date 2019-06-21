import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  urlBase: String = 'https://restaurante-cerizza.herokuapp.com/';
  urlLea: String = 'http://kq000525.ferozo.com/API_Comanda/'

  constructor(public http: HttpClient) {
  }

  public httpGetP(url: string) {
    return this.http
      .get(this.urlBase + url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpDeleteP(url: string) {
    return this.http
      .delete(this.urlBase + url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, request: Object) {
    return this.http.post(this.urlBase + url, request).toPromise();
  }

  // tslint:disable-next-line:no-shadowed-variable
  public httpGetO<T>(url: string) {
    return this.http.get<T>(this.urlBase + url);
  }


  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }

  ///pasar de base de datos

  public httpPostL(url: string, data: object) {
    return this.http.post(this.urlLea + url, data);
  }

  public httpGetL(url: string) {
    return this.http.get(this.urlLea + url);
  }

  // tslint:disable-next-line:no-shadowed-variable
  public httpGetOL<T>(url: string) {
    return this.http.get<T>(this.urlLea + url);
  }
}
