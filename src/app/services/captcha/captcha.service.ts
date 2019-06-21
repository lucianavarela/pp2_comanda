import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Captcha } from '../../models/captcha';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {
  constructor(public miHttp: HttpService) { }

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
