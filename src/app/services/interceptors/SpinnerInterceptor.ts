import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { SpinnerHandlerService } from '../spinner-handler/spinner-handler.service';

@Injectable({
    providedIn: 'root'
})
export class SpinnerInterceptor implements HttpInterceptor {
    constructor(private spinnerHandler: SpinnerHandlerService, ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerHandler.presentLoadingCustom();

        return next.handle(request).pipe(tap(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.spinnerHandler.dismiss();
                }
            }));
    }
}
