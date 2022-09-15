<<<<<<< 1a259d2ea2f4dc0a4c34236dcff12789da0b82ff
import { Component, OnInit } from '@angular/core';
=======
import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "protractor";
>>>>>>> 1

@Component({
  selector: 'bg-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {
  @Output() onCountInc = new EventEmitter<number>();
  interval: any;
  lastEmittedNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
      this.interval = setInterval(() => this.onCountInc.emit(this.lastEmittedNumber++), 1000);
  }

  onEnd(){
    clearInterval(this.interval);
 }
}
