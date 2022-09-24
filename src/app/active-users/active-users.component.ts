import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UserStatusChangeService} from '../user-status-change.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[];

  constructor(private userStatusChangeService: UserStatusChangeService,
              private counterService: CounterService) { }

  ngOnInit(): void {
    this.activeUsers = this.userStatusChangeService.activeUsers;
  }

  changeStatus(id: number) {
    this.userStatusChangeService.onSetToInactive(id);
    this.counterService.increseCounter();
  }

}
