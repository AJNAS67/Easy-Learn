import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.get('skip')) {
      return next.handle(request);
    }
    const tokenizedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });
    return next.handle(tokenizedRequest);
  }
}
