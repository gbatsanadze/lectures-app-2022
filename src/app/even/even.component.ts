import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'bg-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {

  @Input() evenNumber: number;

  constructor() { }

  ngOnInit(): void {
  }

}
