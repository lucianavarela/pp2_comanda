import { Injectable } from '@angular/core';
import { HttpBase } from '../http-base/http-base.service';
import { Login } from '../../Model/Login';
import { User } from '../../Model/User';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(public miHttp: HttpBase, private jwt: JwtHelperService) {
  }

  Loguear(dataLogin: Login) {
    const request: JSON = JSON.parse(JSON.stringify(dataLogin));
    return this.miHttp.httpPostP('/empleados/login', request);
  }

  logout() {
    localStorage.removeItem('token');
  }

  getUserInfo(): User {
    const token = localStorage.getItem('token');
    const tokenInfo = this.jwt.decodeToken(token);
    return new User(tokenInfo['usuario'], tokenInfo['tipo'], tokenInfo['id'], tokenInfo['nombre']);
  }
}
