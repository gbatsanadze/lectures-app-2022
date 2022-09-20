import {Component, OnDestroy, OnInit} from '@angular/core';

import {SeminarService} from './seminar.service';
import {Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  showCongratulations = false;
  mySub: Subscription;

  constructor(private seminarService: SeminarService) {
  }

  ngOnInit() {

    // TODO: აქ დაწერეთ თქვენი interval observable-ის კოდი.
    const myTimeout = num => new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(num);
        observer.complete();
        observer.error(new Error('Error!'));
      }, num);
    });

    myTimeout(1000).pipe(
      map((data) => {
        return 'ფუნქციის გამოძახება მოხდა ' + data + ' მილი წამის შემდეგ';
      })
    ).subscribe((res) => {
      console.log(res);
    }, () => {
    }, () => {
      console.log('Completed');
    });

    console.log('sub', this.seminarService);
    this.mySub = this.seminarService.subject.subscribe(value => {
      this.showCongratulations = value;
    });

  }

  ngOnDestroy() {
    this.mySub.unsubscribe();
  }

}
