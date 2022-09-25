import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  ActivatedRoute,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import {AppRoutingModule} from './app-routing.module';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.url[0].path.length % 2 === 0){
      this.router.navigate(['/fifth']);
    }
    return true;
  }

}
