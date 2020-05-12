import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

import { Account, AccountStatus } from '../account.model';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'bg-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [LoggingService, AccountsService]
})
export class AccountComponent implements OnInit {
  @Input() account: Account;
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status) {
    this.accountsService.updateSatus(this.id, status);
    this.loggingService.logStatusChange(status);
  }

}
