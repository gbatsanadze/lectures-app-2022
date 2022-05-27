import {Component, EventEmitter, OnInit,OnDestroy, Output} from '@angular/core';


@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit,OnDestroy {
  @Output() countNumbers = new EventEmitter<number>();
  ref: any;

  number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.onStart();
  }
  ngOnDestroy(): void{
    clearInterval(this.ref);
  }
  onStart() {
    this.ref = setInterval(() => this.countNumbers.emit(this.number++), 1000);
  }

  onEnd() {
    clearInterval(this.ref);
  }

}
