import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  username = '';
  show = false;
  count = 0;

  constructor() {}

  ngOnInit(): void {
  }

  deleteUsername() {
    this.username = '';
  }

  onClick() {
    this.show = !this.show;
    this.count++;
  }

}
