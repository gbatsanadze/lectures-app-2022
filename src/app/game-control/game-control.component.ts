import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() count = new EventEmitter<number>();
  timerId: any;
  counter = 0;
  constructor() { }
  ngOnInit(): void {
  }
  btnStart() {
    this.timerId = setInterval(() => {
      this.count.emit(this.counter++);
    }, 1000);
  }
  btnStop() {
    clearInterval(this.timerId);
  }
}
