import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'bg-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  countValue = 0;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params.count){
        this.countValue = +params.count;
      }
    });
  }

  countMe() {
    this.router.navigate(['.'], {relativeTo: this.route, queryParams: {count: this.countValue + 1}});
  }
}
