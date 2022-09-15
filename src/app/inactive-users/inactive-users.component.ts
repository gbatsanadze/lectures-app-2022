import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ManageService} from "../services/manage.service";
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'bg-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.scss']
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[];

  constructor(private manageService: ManageService, private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.users = this.manageService.inactiveUsers;
  }

  changeStatus(id: number) {
    this.counterService.onUserStatusChange();
    this.manageService.onSetToActive(id);
  }

}
