import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ChangeUserLocationService} from '../changeUserLocation.service';

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private changeUserLocation: ChangeUserLocationService) { }

  ngOnInit(): void {
    this.users = this.changeUserLocation.inactiveUsers;
  }

  changeStatus(id: number) {
    this.changeUserLocation.onSetToActive(id);
  }

}
