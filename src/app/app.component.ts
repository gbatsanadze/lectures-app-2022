import { Component, OnInit } from '@angular/core';

import { SeminarService } from './seminar.service';
import {Observable, Subscription} from "rxjs";
import {timeout} from "rxjs/operators";

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showCongratulations = false;
  observeble: Subscription;

  constructor(private seminarService: SeminarService) {}

  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.

    const myTimeOut = num =>  new Observable<number>( observer => {
      let counter = 0;
      setTimeout(() => {
        observer.next(counter++);
      }, num);
    });


  }
}
