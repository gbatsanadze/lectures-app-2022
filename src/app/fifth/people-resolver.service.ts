import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {FifthService} from './fifth.service';

@Injectable({
  providedIn: 'root'
})
export class PeopleResolver  implements Resolve<string[]>{


  constructor(private fifthService: FifthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.fifthService.getPeople();
  }
}
