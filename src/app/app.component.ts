import { Component, DoCheck } from '@angular/core';
import {FormGroup, FormControl, Validators, ValidationErrors} from '@angular/forms';

import {selectErrMsg} from './formsValidation/selectErrMsg';
import {allErrMsgs} from './formsValidation/allErrMsgs';

import {checkInputsSymbols} from './formsValidation/checkInputsSymbols';
import {checkDate} from './formsValidation/checkDate';
import {asyncAgeValidator} from "./formsValidation/asyncAgeValidator";
import {asyncNameValidator} from "./formsValidation/asyncNameValidator";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements DoCheck{
  userForm: FormGroup;
  constructor(){
    this.userForm = new FormGroup({
      'name': new FormControl(null, [], [
        asyncNameValidator
      ]),
      'age': new FormControl(null,[],[
        asyncAgeValidator
      ]),
      'dateOfBirth': new FormControl(null, [
        checkDate('YYYY/MM/DD'),
        checkInputsSymbols.dateOfBirth('/'),
        Validators.required
      ]),
      'dateOfLogin': new FormControl(null, [
        checkDate('DD MMMM YYYY'),
        checkInputsSymbols.dateOfLogin(' '),
        Validators.required
      ]),
      'dateOfNotif': new FormControl(null, [
        checkDate('DD-MMM-YY'),
        checkInputsSymbols.dateOfNotif('-'),
        Validators.required
      ])
    });
  }

  ngDoCheck(){
    if (!this.userForm.controls.name.pending && this.userForm.controls.name.dirty) {
      this.getErrMsg('name');
    }
    if (!this.userForm.controls.age.pending && this.userForm.controls.age.dirty) {
      this.getErrMsg('age');
    }
    if (!this.userForm.controls.dateOfBirth.pending && this.userForm.controls.dateOfBirth.dirty) {
      this.getErrMsg('dateOfBirth');
    }
  }

  placeholders = {
    name: 'One or two words',
    age: 'From 18 till 65',
    dateOfBirth: 'YYYY/MM/DD',
    dateOfLogin: 'DD MMMM YYYY',
    dateOfNotif: 'DD-MMM-YY'
  };

  errMsgs: ValidationErrors = {
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
    // console.log(this.userForm.controls[controlName].errors);//todo after delete
  };
}
