import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {selectErrMsg} from "./formsValidation/selectErrMsg";
import {allErrMsgs} from "./formsValidation/allErrMsgs";

import {checkIsNumbers} from "./formsValidation/checkIsNumbers";
import {checkNumberInterval} from "./formsValidation/checkNumberInterval";
import {checkDateFormat} from "./formsValidation/checkDateFormat";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userForm: FormGroup = new FormGroup({
    'name': new FormControl(null, [
      Validators.required
    ]),
    'age': new FormControl(null, [
      Validators.required,
      checkIsNumbers,
      checkNumberInterval(18, 65)
    ]),
    'dateOfBirth': new FormControl(null, [
      Validators.required,
      checkDateFormat('YYYY/MM/DD')
    ]),
    'dateOfLogin': new FormControl(null, [
      Validators.required
    ]),
    'dateOfNotif': new FormControl(null, [
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

  errMsgs: {[key: string]: string|null} = {
    name: null,
    age: null,
    dateOfBirth: null,
    dateOfLogin: null,
    dateOfNotif: null
  };


  submit = () => {
    console.log(this.userForm);//todo after delete
  };

  getErrMsg = (controlName: string) => {
    this.errMsgs[controlName] = selectErrMsg(this.userForm, controlName, allErrMsgs[controlName]);
    console.log(this.errMsgs[controlName]);
  };
}


