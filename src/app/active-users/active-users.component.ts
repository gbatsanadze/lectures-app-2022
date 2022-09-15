import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ChangeUserLocationService} from "../changeUserLocation.service";

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  users: string[];


  constructor(private changeUserLocation: ChangeUserLocationService) { }

  ngOnInit(): void {
    this.users=this.changeUserLocation.activeUsers;
  }

  changeStatus(id: number) {
    this.changeUserLocation.onSetToInactive(id);
  }

}
