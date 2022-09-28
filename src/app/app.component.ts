import {Component, OnDestroy, OnInit} from '@angular/core';

import { SeminarService } from './seminar.service';
import {Observable, Subscription} from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  showCongratulations = false;
  subscription: Subscription;
  subscription2: Subscription;

  constructor(private seminarService: SeminarService) {}



  ngOnInit() {
    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.

    const myTimeout = num => new Observable<number>(observer => {
      setTimeout( () => {
        observer.next(num);
        observer.complete();
      }, num);
    });

    this.subscription = myTimeout(5000).pipe(
      map((data) => {
        return 'ფუნქციის გამოძახება მოხდა ' + data + ' მილი წამის შემდეგ';
      })
    ).subscribe((value) => {
      console.log(value);
    } );

    this.subscription2 = this.seminarService.subject.subscribe(value => {
      this.showCongratulations = value;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
