import {Component, OnDestroy, OnInit} from '@angular/core';

import { SeminarService } from '../seminar.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'bg-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  constructor(private seminarService: SeminarService) {}


  ngOnInit(): void {

  }

  onEndSeminar() {
    console.log(1);
    this.seminarService.subject.next(true);
  }

}
