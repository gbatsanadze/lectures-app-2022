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

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(this.activatedRoute.url[0].path);
    if (this.activatedRoute.url[0].path.length % 2){
      console.log(2);
      this.router.navigate(['/fifth']);
    }
    return true;
  }

}
