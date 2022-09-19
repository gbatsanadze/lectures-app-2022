import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {createOutput} from '@angular/compiler/src/core';

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  i = 0 ;
  timeout: number;

  @Output() throwNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.timeout = setInterval(() => {
                          this.i++;
                          this.throwNumber.emit(this.i);
                      }, 1000);
  }

  endGame(){
    clearInterval(this.timeout);
  }

}
