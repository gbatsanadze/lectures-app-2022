import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
 userName = '';
  constructor() { }

  ngOnInit(): void {
  }

  inputUserName(value) {
this.userName = (value.target as HTMLInputElement).value;

  }

}
