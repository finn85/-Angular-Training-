import { Component, DoCheck } from '@angular/core';
import {FormGroup, FormControl, ValidationErrors} from '@angular/forms';

import {selectErrMsg} from './formsValidation/selectErrMsg';
import {allErrMsgs} from './formsValidation/allErrMsgs';
import {covertDateFormat} from './formsValidation/validationFunctions';

import {asyncAgeValidator} from "./formsValidation/asyncAgeValidator";
import {asyncNameValidator} from "./formsValidation/asyncNameValidator";
import {asyncDateOfBirthValidator} from "./formsValidation/asyncDateOfBirthValidator";
import {asyncDateOfLoginValidator} from "./formsValidation/asyncDateOfLoginValidator";
import {asyncDateOfNotifValidator} from "./formsValidation/asyncDateOfNotifValidator";
import {validatedDataInterface} from "./formsValidation/interfaceValidatedData";

@Component({
  selector: 'app-root',
  template:`<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements DoCheck {
  userForm: FormGroup;
  constructor(){
    this.userForm = new FormGroup({
      'name': new FormControl(null, [], [
        asyncNameValidator
      ]),
      'age': new FormControl(null,[],[
        asyncAgeValidator
      ]),
      'dateOfBirth': new FormControl(null, [], [
        asyncDateOfBirthValidator
      ]),
      'dateOfLogin': new FormControl(null, [], [
        asyncDateOfLoginValidator
      ]),
      'dateOfNotif': new FormControl(null, [], [
        asyncDateOfNotifValidator
      ])
    });
  }

  ngDoCheck(){
    if (!this.userForm.controls.name.pending && this.userForm.controls.name.dirty) {
      this.getErrMsg('name');
      this.getValidatedData('name');
    }
    if (!this.userForm.controls.age.pending && this.userForm.controls.age.dirty) {
      this.getErrMsg('age');
      this.getValidatedData('age');
    }
    //todo convert date format
    if (!this.userForm.controls.dateOfBirth.pending && this.userForm.controls.dateOfBirth.dirty) {
      this.getErrMsg('dateOfBirth');
      this.getValidatedData('dateOfBirth');
    }
    if (!this.userForm.controls.dateOfLogin.pending && this.userForm.controls.dateOfLogin.dirty) {
      this.getErrMsg('dateOfLogin');
      this.getValidatedData('dateOfLogin');
      covertDateFormat(this.validatedData,'dateOfLogin', 'DD MMMM YYYY');
    }
    if (!this.userForm.controls.dateOfNotif.pending && this.userForm.controls.dateOfNotif.dirty) {
      this.getErrMsg('dateOfNotif');
      this.getValidatedData('dateOfNotif');
      covertDateFormat(this.validatedData,'dateOfNotif', 'DD-MMM-YY');
    }
    if (this.userForm.invalid || this.userForm.pending) {
      this.submitted = false;
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

  validatedData: validatedDataInterface = {
    name: '',
    age: '',
    dateOfBirth: '',
    dateOfLogin: '',
    dateOfNotif: ''
  };

  submitted: boolean = false;

  getValidatedData = (controlName: string): void => {
    if (this.userForm.controls[controlName].valid) {
      this.validatedData[controlName] = this.userForm.controls[controlName].value
    }
  };

  getErrMsg = (controlName: string): void => {
    this.errMsgs[controlName] = selectErrMsg(this.userForm, controlName, allErrMsgs[controlName]);
  };

  submit = () => {
      this.submitted = true;
  };
}
