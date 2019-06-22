import { Injectable } from '@angular/core';
import { Login } from '../../models/login';
import { User } from '../../models/user';
import { HttpService } from '../http/http.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;
  usuario: User;
  constructor(public miHttp: HttpService, private jwt: JwtHelperService) {
  }

  Loguear(dataLogin: Login) {
    const request: JSON = JSON.parse(JSON.stringify(dataLogin));
    return this.miHttp.httpPostP('/empleados/login', request);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getUserInfo(): User {
    if (this.isLogged()) {
      const token = localStorage.getItem('token');
      const tokenInfo = this.jwt.decodeToken(token);
      return new User(tokenInfo['usuario'], tokenInfo['tipo'], tokenInfo['id'], tokenInfo['nombre']);
    } else {
      return null;
    }
  }
  
  isLogged() {
    return localStorage.getItem('token') != null;
  }

  token(){
    const token = localStorage.getItem('token');
    const tokenInfo = this.jwt.decodeToken(token);
    //return new User(tokenInfo['usuario'], tokenInfo['tipo'], tokenInfo['id'], tokenInfo['nombre']);
    return tokenInfo;
  }
}
