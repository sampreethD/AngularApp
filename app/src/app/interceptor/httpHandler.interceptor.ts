import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoaderService } from '../services/loader.service';

@Injectable()
export class HttpHandlerInterceptor implements HttpInterceptor {
    requestCounter = 0;
    loader = false;
    constructor(private httpLoader: LoaderService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.requestInterceptor();
        return next.handle(req)
            .pipe(
                finalize(() => {
                    this.responseInterceptor();
                    console.log('loader interceptor working');
                })
            );
    }

    private requestInterceptor() {
        this.requestCounter++;
        if (this.requestCounter > 0) {
            this.httpLoader.httpRequestInProgress(true);
        }
    }

    private responseInterceptor() {
        this.requestCounter--;
        if (this.requestCounter < 1) {
            this.httpLoader.httpRequestInProgress(false);
        }
    }
}
