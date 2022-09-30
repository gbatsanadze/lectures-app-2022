import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AuthResponseModel} from './auth-response.model';
import {LoaderService} from '../loader/loader.service';
import {catchError, tap} from 'rxjs/operators';
import {throwError, Subject} from 'rxjs';
import {User} from './user.model';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = new Subject<User>();
  private timer: number;

  constructor(private http: HttpClient, private loaderService: LoaderService, private router: Router) {
  }

  register(name, username, password) {
    return this.http
      .post<AuthResponseModel>('register', {
        name,
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((resData) => this.handleAuth(resData))
      );
  }

  login(username, password) {
    return this.http
      .post<AuthResponseModel>('login', {
        username,
        password,
      })
      .pipe(
        this.loaderService.useLoader,
        catchError((err) => throwError(err.error)),
        tap((resData) => this.handleAuth(resData))
      );
  }

  autoLogin() {
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const user = new User(
      userData.name,
      userData.username,
      userData.image,
      userData._token,
      new Date(userData._expirationDate),
    );
    if (user.token) {
      this.user.next(user);
    }
    this.autoLogout(
      new Date(userData._expirationDate).getTime() - new Date().getTime()
    );
  }

  handleAuth = (resData: AuthResponseModel) => {
    const user = new User(
      resData.name,
      resData.username,
      resData.image,
      resData.token,
      new Date(resData.expirationDate)
    );
    this.user.next(user);
    localStorage.setItem('resData', JSON.stringify(user));
    this.autoLogout(
      new Date(resData.expirationDate).getTime() - new Date().getTime()
    );
  };

  logout() {
    this.user.next(undefined);
    this.router.navigate(['/auth']);
    localStorage.removeItem('userData');
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = undefined;
  }

  autoLogout(expTime: number) {
    this.timer = setTimeout(() => {
      this.logout();
    }, Math.min(60000, expTime));
  }

}
