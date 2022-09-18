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

  getUserName(item){
      this.userName = (item.target as HTMLInputElement).value;
      if (this.userName === ''){
        this.allowButtonClick = false;
      }else {
        this.allowButtonClick = true;
      }

  }

  addUser(){
    this.userName = '';
    this.allowButtonClick = false;
  }

  dissapear(){
    this.allowAddButtonClick = !this.allowAddButtonClick;
  }
}
