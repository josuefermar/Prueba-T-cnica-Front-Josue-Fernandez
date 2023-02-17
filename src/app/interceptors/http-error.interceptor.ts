import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import Utils from '../utils';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError(error => {
        let errorMessage = '';
        if (error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message} <br> Si el error persiste contacte al administrador`;
        } else {
          errorMessage = `Error interno: ${error.status} ${error.message} <br> Si el error persiste contacte al administrador`;
        }

        Utils.showErrorMessage(errorMessage);
        return throwError(errorMessage);
      })
    )
  }
}
