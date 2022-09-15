import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ManageService} from "../services/manage.service";
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'bg-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private manageService: ManageService, private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.users = this.manageService.activeUsers;
  }

  changeStatus(id: number) {
    this.counterService.onUserStatusChange();
    this.manageService.onSetToInactive(id);
  }

}
