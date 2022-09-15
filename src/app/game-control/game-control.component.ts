
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit{
  @Output() counterIncreased = new EventEmitter<number>();
  interval;
  num = 0;

  constructor() { }

  ngOnInit(): void {
  }


  onStartGame() {
    this.interval = setInterval(() => {
      this.counterIncreased.emit(this.num++);
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.interval);
  }

}
