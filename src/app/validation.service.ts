import {Injectable} from '@angular/core';
import {FormControl} from '@angular/forms';

interface ErrorsData {
  [key: string]: {
    [subkey: string]: boolean;
  }
}

@Injectable()

export class ValidationService {

  data: ErrorsData = {
    loginName: {
      required: false,
      incorrectSymbols: false
    },
    password: {
      required: false,
      incorrectSymbols: false
    },
    name: {
      required: false,
      incorrectSymbols: false,
      noPascalCase: false,
      moreThanTwoWords: false
    },
    age: {
      required: false,
      incorrectSymbols: false,
      incorrectInterval: false
    },
    dateOfBirth: {
      required: false,
      incorrectSymbols: false,
      incorrectFormat: false,
      incorrectYearFormat: false,
      incorrectYear: false,
      incorrectMonth: false,
      incorrectDayFormat: false,
      incorrectDay: false
    },
    dateOfLogin: {
      required: false,
      incorrectSymbols: false,
      incorrectFormat: false,
      incorrectYearFormat: false,
      incorrectYear: false,
      incorrectMonth: false,
      incorrectDayFormat: false,
      incorrectDay: false
    },
    dateOfNotif: {
      required: false,
      incorrectSymbols: false,
      incorrectFormat: false,
      incorrectYearFormat: false,
      incorrectYear: false,
      incorrectMonth: false,
      incorrectDayFormat: false,
      incorrectDay: false
    }
  };

  defineErr = (control: FormControl): void => {
    const errorType: string = control.errors ? control.errors.type : '';
    const errorTarget: string = control.errors ? control.errors.target : '';

    this.clearErrs(this.data[errorTarget]);

    this.data[errorTarget][errorType] = true;
  };

  clearErrs = (data: any): void => {
    for (let key in data) {
      if (data.hasOwnProperty(key)){
        data[key] = false;
      }
    }
  }
}
