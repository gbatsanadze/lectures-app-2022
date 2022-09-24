import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {UserStatusChangeService} from "../services/user-status-change.service";

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss'],
  providers: [UserStatusChangeService]
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private userStatusChangeService: UserStatusChangeService) { }

  ngOnInit(): void {
  }

  changeStatus(id: number) {
    this.userStatusChangeService.onSetToActive(id);
  }

}
