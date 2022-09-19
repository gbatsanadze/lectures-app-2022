import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numbers = [];
  title = 'lectures-app';

  addElement(num){
    this.numbers.push(num);
  }

}
