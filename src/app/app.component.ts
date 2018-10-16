import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {getErrMsg} from "./formsValidation/getErrMsg";
import {validNumbers} from "./formsValidation/validSymbols";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [
      Validators.required
    ]),
    'userAge': new FormControl(null, [
      Validators.required,
      validNumbers
    ]),
    'userDateOfBirth': new FormControl(null, [
      Validators.required
    ]),
    'userDateOfLogin': new FormControl(null, [
      Validators.required
    ]),
    'userDateOfNotif': new FormControl(null, [
      Validators.required
    ])
  });

  placeholders = {
    name: 'Enter your name',
    age: 'Enter your age',
    dateOfBirth: 'YYYY/MM/DD',
    dateOfLogin: 'DD MMMM YYYY',
    dateOfNotif: 'DD-MMM-YY'
  };

  errMsgs = {
    userName: {
      required: 'please, enter your name'
    },
    userAge: {
      required: 'please, enter your age',
      notANumber: 'please, enter numbers'
    },
    dateOfBirth: {
      required: 'please, enter your birthday'
    },
    dateOfLogin: {
      required:'please, enter date of your login'
    },
    dateOfNotif: {
      required: 'please, enter date of notification'
    }
  };

  userNameErrMsg: string|null = null;
  userAgeErrMsg: string|null = null;
  userDateOfBirthErrMsg: string|null = null;
  userDateOfLoginErrMsg: string|null = null;
  userDateOfNotifErrMsg: string|null = null;

  submit = () => {
    console.log(this.userForm.controls.userAge);
    this.userAgeErrMsg = getErrMsg(this.userForm, 'userAge', this.errMsgs.userAge);
    this.userNameErrMsg = getErrMsg(this.userForm, 'userName', this.errMsgs.userName);
    this.userDateOfBirthErrMsg = getErrMsg(this.userForm, 'userDateOfBirth', this.errMsgs.dateOfBirth);
    this.userDateOfLoginErrMsg = getErrMsg(this.userForm, 'userDateOfLogin', this.errMsgs.dateOfLogin);
    this.userDateOfNotifErrMsg = getErrMsg(this.userForm, 'userDateOfNotif', this.errMsgs.dateOfNotif);
  };
}


