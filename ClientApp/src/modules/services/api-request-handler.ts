import { Injectable } from '@angular/core';
import {
    HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,
    HttpResponse, HttpErrorResponse
    } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class APIRequestHandler implements HttpInterceptor {

    constructor() {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: 'Test 12345',
                Token: 'test'
            }
        });
        return next.handle(request).pipe(map((event: HttpEvent<any>) => {
          
            if (event instanceof HttpResponse && ~~(event.status / 100) > 3) {
                console.info('HttpResponse::event =', event, ';');
            } else {
                console.info('event =', event, ';');
                if (event instanceof HttpErrorResponse) {
                    if (event.status === 403) {
                        console.info('err.error =', event.error, ';');
                    }
                }

            }
            return event;
        }));

    }

}