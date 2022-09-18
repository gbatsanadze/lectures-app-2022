import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  counter = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((queryParams) => {
    //   this.counter++;
    // })
    this.activatedRoute.queryParams.subscribe(params => {
      if (!isNaN(params.count)) {
        this.counter = +params.count;
      }
    });
  }

  addOne() {
    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: { count: this.counter + 1 } });
  }

}
