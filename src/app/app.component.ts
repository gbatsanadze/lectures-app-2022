import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = new EventEmitter<number>();
  evenArray = [];
  oddArray = [];

  onCounter(num: number) {
    if (num % 2 === 0) {
      this.oddArray.push(num);
    } else {
      this.evenArray.push(num);
    }
  }
}
