import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";

const base_url = 'https://bog-angular-course-api.herokuapp.com/lectures-api/';

export class UrlInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return next.handle(req.clone({
        url: base_url + req.url,
      }
    ));
  }

}
