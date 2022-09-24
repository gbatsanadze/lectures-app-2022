import {Component, OnInit} from '@angular/core';
import {CounterService} from '../counter.service';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{

  allowAddActiveClass = false;
  constructor(public counterService: CounterService) { }

  ngOnInit() {
  }

  addActiveClass(){
    this.allowAddActiveClass = true;
    setInterval(() => {
      this.allowAddActiveClass = false;
    }, 1000);
  }

}
