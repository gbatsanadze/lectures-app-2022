import { Injectable } from '@angular/core';
import {FifthService} from "./fifth/fifth.service";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ResolveFifthElemDataService implements Resolve<string[]>{

  constructor(private fifthService: FifthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string[]> | Promise<string[]> | string[] {
    return this.fifthService.getPeople();
  }

}
