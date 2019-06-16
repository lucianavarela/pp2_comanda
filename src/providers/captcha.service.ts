import { HttpBase } from './http-base/http-base.service';
import { Injectable } from '@angular/core';
import { Captcha } from '../Model/Captcha';
import { Observable } from 'rxjs';

@Injectable()
export class CaptchaService {
  constructor(public miHttp: HttpBase) { }

  public GetCaptcha(): Observable<Captcha> {
    return this.miHttp.httpGetO<Captcha>('captcha');
  }

  public PostCaptcha(key: string, color: string): Promise<any> {
    const request: Object = {
      key: key,
      color: color
    };
    return this.miHttp.httpPostP('captcha', request);
  }
}

