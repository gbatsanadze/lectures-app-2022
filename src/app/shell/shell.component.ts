import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  username = '';
  showParagraph = true;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  onClickDeleteButton(){
    this.username = '';
  }

  onClickShowButton(){
    this.showParagraph = !this.showParagraph;
    this.clicks.push(this.clicks.length + 1);
  }

}
