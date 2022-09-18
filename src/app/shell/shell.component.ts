import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  userName =  '';
  allowButtonClick = false;
  allowAddButtonClick = true;

  constructor() { }

  ngOnInit(): void {
  }


  dissapear(){
    this.allowAddButtonClick = !this.allowAddButtonClick;
  }
}
