import {Injectable} from '@angular/core';
import {User} from '../user';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {
  private loginUrl = 'auth';
  baseURL = 'http://localhost:8762';
  constructor(private http: HttpClient) {}


  isUserAuthenticated(username: string, password: string) {
    return this.http.post<any>(this.baseURL + '/auth', { username, password }, {observe: 'response' as 'body'})
      .pipe(map(data => {
        sessionStorage.setItem('username', username);
        const tokenStr = data.headers.get('authorization');
        sessionStorage.setItem('token', tokenStr);
        return data;
      }));
  }

  register(username: string, password: string) {
    return this.http.post<any>(this.baseURL + '/register', { username, password }, {observe: 'response' as 'body'})
      .pipe(map(data => {
        return data;
      }));
  }

  getLoginUrl(): string {
    return this.loginUrl;
  }
  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
