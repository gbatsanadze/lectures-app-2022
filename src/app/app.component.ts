import { Component } from '@angular/core';
import {UserStatusChangeService} from './user-status-change.service';
import {CounterService} from './counter.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserStatusChangeService, CounterService]
})
export class AppComponent {

}
