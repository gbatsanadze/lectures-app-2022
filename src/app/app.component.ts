import {Component, OnInit} from '@angular/core';
import {AuthService} from './shared/auth.service';
@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements  OnInit{

  isUserLogin = false;

  constructor(private authService: AuthService) {
  }
  ngOnInit(): void {
    console.log('nldsnvls');

    this.authService.user.subscribe( (userData) => {
      console.log(userData.username);
      this.isUserLogin = true;
      console.log(this.isUserLogin + 'jskafkja');
    });
  }



}
