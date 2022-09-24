import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    if (this.activatedRoute.snapshot.queryParams.counter !== undefined){
      this.counter = this.activatedRoute.snapshot.queryParams.counter;
    }
  }

  increaseCounter(){
    this.counter++;
  }

}
