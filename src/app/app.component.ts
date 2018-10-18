import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import {selectErrMsg} from './formsValidation/selectErrMsg';
import {allErrMsgs} from './formsValidation/allErrMsgs';

import {checkInputsSymbols} from "./formsValidation/checkInputsSymbols";
import {checkNumberInterval} from './formsValidation/checkNumberInterval';
import {checkDateFormat} from "./formsValidation/checkDateFormat";
import {checkDateYearFormat} from "./formsValidation/checkDateYearFormat";
import {checkDateOfBirthYear, checkDateOfLoginYear, checkDateOfNotifYear} from "./formsValidation/checkDateYear";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userForm: FormGroup = new FormGroup({
    'name': new FormControl(null, [
      Validators.required,
      checkInputsSymbols.name()
    ]),
    'age': new FormControl(null, [
      Validators.required,
      checkInputsSymbols.age(),
      checkNumberInterval(18, 65)
    ]),
    'dateOfBirth': new FormControl(null, [
      checkDateOfBirthYear,
      checkDateYearFormat('YYYY/MM/DD'),
      checkDateFormat('/'),
      checkInputsSymbols.dateOfBirth('/'),
      Validators.required
    ]),
    'dateOfLogin': new FormControl(null, [
      checkDateOfLoginYear,
      checkDateYearFormat('DD MMMM YYYY'),
      checkDateFormat(' '),
      checkInputsSymbols.dateOfLogin(' '),
      Validators.required
    ]),
    'dateOfNotif': new FormControl(null, [
      checkDateOfNotifYear,
      checkDateYearFormat('DD-MMM-YY'),
      checkDateFormat('-'),
      checkInputsSymbols.dateOfNotif('-'),
      Validators.required
    ])
  });

  placeholders = {
    name: 'One or two words',
    age: 'From 18 till 65',
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
    console.log(this.userForm.controls[controlName].errors);//todo after delete
  };
}
