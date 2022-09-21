import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {OddComponent} from './odd/odd.component';
import {GameControlComponent} from './game-control/game-control.component';
import {EvenComponent} from './even/even.component';

@NgModule({
  declarations: [
    AppComponent,
    OddComponent,
    GameControlComponent,
    EvenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
