import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from 'src/app/shared/validators';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.initForm();
  }


  onLogin() {
    if (this.form.invalid) {
      return;
    }
    const username = this.get('username').value;
    const password = this.get('password').value;
    this.authService.login(username, password).subscribe(
      resData => {
        console.log(resData);
      },
      error => {
        this.error = error;
      }
    );

    this.form.reset();
  }

  get(controlName) {
    return this.form.get(controlName);
  }

  errors(controlName) {
    return this.get(controlName)?.errors ? Object.values(this.get(controlName).errors) : [];
  }

  initForm() {
    this.form = new FormGroup({
      username: new FormControl(undefined, [
        Validators.required,
        Validators.pattern(/^\S*$/, 'სფეისების გარეშე'),
        Validators.minLength(2),
        Validators.maxLength(30)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30)
      ])
    });
  }

}
