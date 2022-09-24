import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UserStatusChangeService} from '../services/user-status-change.service';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[];

  constructor(private userStatusChangeService: UserStatusChangeService,
              private counterService: CounterService) { }

  ngOnInit(): void {
    this.inactiveUsers = this.userStatusChangeService.inactiveUsers;
  }

  changeStatus(id: number) {
    this.userStatusChangeService.onSetToActive(id);
    this.counterService.increseCounter();

  }

}
