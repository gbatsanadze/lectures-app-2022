import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Validators} from 'src/app/shared/validators';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error;

  constructor(private authServ: AuthService) {
  }

  ngOnInit() {
    this.initForm();
  }

  onLogin() {
    console.log(this.form.value);
    if (this.form.invalid) {
      return;
    }
    const username = this.form.get('username').value;
    const password = this.form.get('password').value;
    this.authServ.login(username, password).subscribe(resp => {
        console.log(resp);
      },
      (error) => {
      this.error = error;
      }
    );
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
