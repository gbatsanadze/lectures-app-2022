import {Component, OnInit} from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{

  counter = 0 ;

  constructor(private counterService: CounterService) { }

  ngOnInit(): void {
    this.counter = this.counterService.counter;
    console.log(1);
    console.log(1);
  }


}
