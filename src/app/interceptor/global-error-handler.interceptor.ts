import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, retry, throwError, timer } from 'rxjs';
import { SnackBarService } from '../snack-bar/snack-bar.service';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private _snackbar: SnackBarService, private _router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next
      .handle(request)

      .pipe(
        catchError((error: HttpErrorResponse) => {
          const errorMessage = this.setError(error);
          console.log(error);
          this._snackbar.popUpMessage(errorMessage);
          return throwError(errorMessage);
        })
      );
  }

  setError(error: HttpErrorResponse): string {
    let errorMessage = 'Unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client side error
      errorMessage = error.error.message;
    } else {
      // server side error
      if (error.status !== 0) {
        errorMessage = error.error.message;
        if (error.error.statusCode == 403 || error.error.statusCode==401) {
          this._router.navigate(['/']);
        }
      }
    }
    return errorMessage;
  }

  // return next.handle(request).pipe(
  //   retry({
  //     count: 3,
  //     delay: (_, retryCount) => timer(retryCount * 1000),
  //   }),
  //   catchError((err) => {
  //     console.log('Error handled Http interceptor');
  //     return throwError(() => {
  //       console.log('Error return own by HTTP interceptor ');
  //       return err;
  //     });
  //   })
  // );
}
