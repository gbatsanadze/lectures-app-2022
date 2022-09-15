import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { CounterComponent } from './counter/counter.component';
import {ManageService} from './services/manage.service';
import {CounterService} from "./services/counter.service";

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ManageService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
