import { Injectable } from '@angular/core';
import {HttpEventType, HttpHandler, HttpRequest} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PathInterseptorService {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const modifiedUrl = req.clone({
      url: req.url.concat('https://bog-angular-course-api.herokuapp.com/lectures-api/posts', req.url)
    });
    console.log('Request has been intercepted' );
    return next.handle(modifiedUrl);
  }
}
