import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  number: number;
  title = 'lectures-app';

  addElement(num){
    this.number = num;
  }

}
