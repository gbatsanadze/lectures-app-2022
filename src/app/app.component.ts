import {Component, OnInit} from '@angular/core';
import {AuthService} from "./shared/auth.service";

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isLoggedIn = false;

  constructor(public autSer: AuthService) {
  }

  ngOnInit() {
    this.autSer.user.subscribe((userData) => {
      console.log(userData);
      if (userData) {
        this.isLoggedIn = true;
      }
    });
  }

}
