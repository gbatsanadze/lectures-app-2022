import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {AuthResponseModel} from './auth-response.model';
import {LoaderService} from './loader/loader.service';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';
import {User} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();

  constructor(private http: HttpClient, private loaderService: LoaderService) {
  }

  register(name, username, password) {
    return this.http.post<AuthResponseModel>('register', {
      name, username, password
    }).pipe(
      this.loaderService.useLoader,
      catchError(err => throwError(err.error))
    );
  }

  login(username, password) {
    return this.http.post<AuthResponseModel>('login', {
      username, password
    }).pipe(
      this.loaderService.useLoader,
      tap((userData) => this.authHandler(userData)),
      catchError(err => throwError(err.error))
    );
  }

  authHandler = (req: AuthResponseModel) => {
    this.user.next(
      new User(
        req.token,
        new Date(req.expirationDate),
        req.name,
        req.username,
        req.image
      )
    );
  }

}
