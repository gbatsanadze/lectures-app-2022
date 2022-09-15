import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  ref = 0;
  inter;
  @Output() addNum = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
       this.inter =  setInterval(() => {
       this.addNum.emit(this.ref++);
     }, 1000);
  }

  onStop(){
    clearInterval(this.inter);
    this.ref = 0;
  }
}
