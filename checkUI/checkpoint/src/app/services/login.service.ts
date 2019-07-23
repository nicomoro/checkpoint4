import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
    })

export class LoginService {

    configUrl = `${environment.apiUrl}/auth/signin`;
    public user: boolean;

    constructor(private http: HttpClient) {}

    login(username: string, password: string) {
        return this.http.post<any>(`${this.configUrl}`, { username, password })
          .pipe(tap((user) => {
            if (user) {
              this.user = true;
              localStorage.setItem('token', user.token);
            }
          }));
      }
}
