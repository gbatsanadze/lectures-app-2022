import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BgValidators} from './bg-validators';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  statuses = ['სტაბილური', 'კრიტიკული', 'დასრულებული'];
  forbiddenNames = ['TEST', 'test'];

  projectForm: FormGroup;

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl(undefined, [BgValidators.required, this.forbiddenNamesValidator.bind(this)]),
      mail: new FormControl(undefined, [BgValidators.required, BgValidators.email,  BgValidators.emailValidator]),
      status: new FormControl(undefined)
    });
  }

  onSubmit(){
    console.log(this.projectForm);

  }

  forbiddenNamesValidator(control: FormControl){
    if (this.forbiddenNames.includes(control.value)){
      return {nameIsForbidden: true};
    }
  }

}
