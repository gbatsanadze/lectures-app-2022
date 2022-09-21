import {Component, EventEmitter} from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = new EventEmitter<number>();
  evens = [];
  odds = [];

  onNumAdd(num: number){
    if (num % 2){
      this.odds.push(num);
    } else{
      this.evens.push(num);
    }
  }


}
