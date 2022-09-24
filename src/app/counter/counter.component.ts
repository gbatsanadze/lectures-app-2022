import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscriber, Subscription} from "rxjs";

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy{
  counter = 0;
  subscribeParam: Subscription;

  constructor(private activatedRoute: ActivatedRoute ,
              private router: Router) { }

  ngOnInit(): void {
    this.subscribeParam = this.activatedRoute.queryParams.subscribe( params => {
      if (!isNaN(params.counter)){
        this.counter = params.counter;
      }
    });

  }

  ngOnDestroy() {
    this.subscribeParam.closed;
  }

  increaseCounter(){
    this.counter++;
    this.router.navigate(['/counter'], {queryParams: {counter: this.counter}});
  }

}
