import {HttpInterceptor, HttpRequest, HttpHandler, HttpEventType, HttpEvent} from '@angular/common/http';
import {Observable, using} from "rxjs";
import {AuthService} from "./auth.service";
import {Injectable} from "@angular/core";
import {switchMap, take} from "rxjs/operators";


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return this.authService.user.pipe(take(1),
      switchMap((user) => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedRequest = req.clone({
          headers: req.headers.append('Authorization', 'Bearer ' + user.token),
        });
        return next.handle(modifiedRequest);
      }));
  }
}

