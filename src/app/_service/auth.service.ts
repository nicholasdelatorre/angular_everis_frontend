import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login } from '../_models/login.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route: Router) { }

  login(model: Login) {
    return this.http.post<any>(`${environment.api}/token`, model)
    .pipe(map(
      user => {
        console.log(user);
        if (user && user.token) {
          console.log (this.token);
          localStorage.setItem('token', user.token);
        }
      }
    ));
  }

  logout() {
    localStorage.removeItem('token');
    this.route.navigateByUrl('/login');
  }

  authenticated(): boolean {
    return (localStorage.token);
  }

  get token() {
    return localStorage.token;
  }
}
