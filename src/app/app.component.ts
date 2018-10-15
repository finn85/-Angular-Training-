import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {showErrMsg} from "./formsValidation/showErrMsg";

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
      Validators.required
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
      NaN: 'please, enter numbers'
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

  userNameErrMsg: string;
  userAgeErrMsg: string;
  userDateOfBirthErrMsg: string;
  userDateOfLoginErrMsg: string;
  userDateOfNotifErrMsg: string;

  submit = () => {

    this.userAgeErrMsg = showErrMsg(this.userForm, 'userAge', this.errMsgs.userAge);
    this.userNameErrMsg = showErrMsg(this.userForm, 'userName', this.errMsgs.userName);
    this.userDateOfBirthErrMsg = showErrMsg(this.userForm, 'userDateOfBirth', this.errMsgs.dateOfBirth);
    this.userDateOfLoginErrMsg = showErrMsg(this.userForm, 'userDateOfLogin', this.errMsgs.dateOfLogin);
    this.userDateOfNotifErrMsg = showErrMsg(this.userForm, 'userDateOfNotif', this.errMsgs.dateOfNotif);
  };
}


