import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  clickCheck = true;
  userName = 'John';
  userName2 = '';
  count = 0;
  txtColor = 'transparent';

  onInput(txt) {
    this.userName = (txt.target).value;
  }

  onClickEvent() {
    this.clickCheck = !this.clickCheck;
    this.count++;
    if (this.count >= 5) {
      this.txtColor = 'blue';
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
