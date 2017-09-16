import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(public router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    return next.handle(request).do(
      (event: HttpEvent<any>) => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['login']);
          }
        }
      }
    );
  }
}
