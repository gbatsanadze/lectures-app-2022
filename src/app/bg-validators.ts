import {FormControl, Validators} from '@angular/forms';

export class BgValidators extends Validators{

  static required(control){
    return super.required(control) ? { required: 'ველის შეყვანა აუცილებელია' } : undefined;
  }

  static email(control){
    return super.email(control) ? { required: 'გთხოვთ შეიყვანოთ სწორი მეილი' } : undefined;
  }


  static emailValidator(control: FormControl) {
    if (control.value && control.value.toLowerCase() === 'test@test.com') {
      return { projectName: 'პროექტის სახელი არ შეიძლება იყოს test@test.com' };
    }
  }

}
