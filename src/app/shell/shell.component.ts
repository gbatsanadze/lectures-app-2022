import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  userName =  '';
  allowAddButtonClick = true;
  counter = 0;

  constructor() { }

  ngOnInit(): void {
  }


  onButtonClick(){
    this.allowAddButtonClick = !this.allowAddButtonClick;
    this.counter++;
  }
}
