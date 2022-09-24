import { Component } from '@angular/core';
import {UserStatusChangeService} from './services/user-status-change.service';
import {CounterService} from './services/counter.service';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserStatusChangeService, CounterService]
})
export class AppComponent {

}
