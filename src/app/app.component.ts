import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BgValidators} from "./bg-validators";

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lectures-app';
  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(undefined, [BgValidators.required, BgValidators.validateProjectName]),
      email: new FormControl(undefined, [BgValidators.required, BgValidators.email, BgValidators.validateEmail], BgValidators.fobiddenMail),
      status: new FormControl(undefined),
    });
  }

  onSubmit() {
    console.log(this.projectForm.value);
    console.log(this.projectForm);
  }

  get(control) {
    return this.projectForm.get(control);
  }

  errors(control) {
    return Object.values(this.get(control).errors);
  }

}
