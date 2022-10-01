import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AuthResponseModel } from './auth-response.model';
import { LoaderService } from './loader/loader.service';
import {catchError, tap} from 'rxjs/operators';
import {Subject, throwError} from 'rxjs';
import {User} from "./auth.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = new Subject<User>();
  constructor(private http: HttpClient, private loaderService: LoaderService) {}

  register(name, username, password) {
    return this.http.post<AuthResponseModel>('register', {
      name, username, password
    }).pipe(
      this.loaderService.useLoader,
      catchError(err => throwError(err.error)),
      tap( (userData ) => {
        this.handleAuth(userData);
      })
    );
  }

  login( username, password) {
    return this.http.post<AuthResponseModel>('login', {
      username, password
    }).pipe(
      this.loaderService.useLoader,
      catchError(err => throwError(err.error))
    );
  }

  handleAuth(resData: AuthResponseModel){
    const user = new User(
      resData.token,
      new Date(resData.expirationDate),
      resData.name,
      resData.username,
      resData.image
    );
    this.user.next(user);
  }
}
