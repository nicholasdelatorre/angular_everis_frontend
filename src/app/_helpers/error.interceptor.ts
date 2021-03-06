import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_service/auth.service';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                alert('Acesso não autorizado!');
                this.authenticationService.logout();
            }

            if (err.status === 0) {
                // auto logout if 401 response returned from api
                alert('Servidor não encontrado!');
                this.authenticationService.logout();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }));
    }
}
