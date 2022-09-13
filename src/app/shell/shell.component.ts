

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  username: string = '';
  usernameExists: boolean = false;
  username2: string = '';
  clickCnt: number = 0;
  click2: boolean = false;
  clickCnt2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  onInput(item){

    this.username = (item.target as HTMLInputElement).value;
    this.usernameExists = this.username === '' ? true : false;

  }

  onClick(){
    this.clickCnt = this.clickCnt + 1;
    this.username = '';
  }

  onClick2(){
    this.click2 = this.click2 === false ? true : false;
    this.clickCnt2 = this.clickCnt2 + 1;
  }

  getColor(){

    return this.clickCnt2 > 5 ? 'blue' : 'white';
  }
}

