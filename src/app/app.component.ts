import { Component } from '@angular/core';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lectures-app';

  numsArr = [];
  onCount(num) {
    this.numsArr.push(num);
  }
}

