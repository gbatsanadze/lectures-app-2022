import {FormControl, Validators} from "@angular/forms";

export class BgValidators extends Validators {
  static validateProjectName(control: FormControl) {
    if (control.value === 'TEST' || control.value === 'test' || control.value === 'Test') {
      return {projNameVal: "შეიყვანეთ ვალიდური სიტყვა, გარდა Test-ისა"};
    }
  }

  static validateEmail(control: FormControl) {
    if (control.value === 'test@test1111.com') {
      return {emailVal: "არ გამოიყენოთ test@test.com"}
    }
  }

  static fobiddenMail(control) {
    return new Promise(resolve => {
      if (control.value === 'test@test.com') {
        resolve ({forbiddenEmail: 'ამ მეილის გამოოყენება აკრძალულია'})
      }
    });
  }

  static required(control: FormControl) {
    if (super.required(control)) {
      return {require: "ველი სავალდებულოა"};
    }
  }

  static email(control: FormControl) {
    if (super.email(control)) {
      return {require: "ჩაწერეთ მეილი სწორი ფორმატით"};
    }
  }

}
