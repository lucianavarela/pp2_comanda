import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SpinnerHandlerProvider } from '../spinner-handler/spinner-handler';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private spinnerHandler: SpinnerHandlerProvider,) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let spinner =  this.spinnerHandler.presentLoadingCustom();
        spinner.present();
        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    spinner.dismiss();
                }
        }));
    }
}
