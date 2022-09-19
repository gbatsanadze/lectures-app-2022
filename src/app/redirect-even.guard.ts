import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedirectEvenGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const routesLen = next.url[0].path.length;
    if (routesLen % 2) {
      return true;
    } else {
      this.router.navigate(['/fifth']);
    }
    console.log(routesLen);
    return routesLen % 2 === 0;
  }

}
