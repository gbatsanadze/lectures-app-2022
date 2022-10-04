import { Injectable } from '@angular/core';
import {PreloadingStrategy, Route} from "@angular/router";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PreloadingService implements PreloadingStrategy{

  constructor() { }

  preload(route: Route, preloadFn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? preloadFn() : of(null);
  }
}
