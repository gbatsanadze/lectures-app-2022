import {Validators} from '@angular/forms';
import {Observable} from "rxjs";

export class BgValidators extends Validators{

  static required(control){
    return super.required(control) ? { required: 'ველის შეყვანა აუცილებელია' } : undefined;
  }

  static email(control){
    return super.email(control) ? { required: 'გთხოვთ შეიყვანოთ სწორი მეილი' } : undefined;
  }

  static forbiddenMails(control){
   return control.value === 'test@test.com' ? {required: 'ასეთი მეილის გამოყენება აკრძალულია'} : undefined;
  }

}
