import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

const BASE_URL = 'https://bog-angular-course-api.herokuapp.com/';



export class UrlInterceptorService implements HttpInterceptor {

  urll ;
  intercept(req: HttpRequest<any>, next: HttpHandler) {
     this.urll = next.handle(req.clone({
       url: BASE_URL + req.url
     }));

     console.log(this.urll);
     return this.urll;
  }
}
