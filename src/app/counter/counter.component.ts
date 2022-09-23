import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  num = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (!isNaN(params.num)){
        this.num += params.num;
      }
    });
  }

  onCount(){
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {num: this.num + 1}})
  }

}
