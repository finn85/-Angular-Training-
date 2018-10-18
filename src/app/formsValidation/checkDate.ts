import {FormControl} from '@angular/forms';
import {DateParams} from "./DateParamsInterface";
import {checkDateFormat} from './checkDateFormat';
import {checkDateYearFormat} from './checkDateYearFormat';
import {checkDateYear} from './checkDateYear';

export const checkDate = (fullFormat: string) =>
  (control: FormControl): {[s:string]: boolean}|null => {

  if (control.value !== null) {

    const params: DateParams = {
      dateSeparator: '',
      yearIndex: 0,
      yearLength: 0,
      minYear: 0,
      maxYear: 0,
      dayIndex: 0
    };

    switch (fullFormat){
      case 'YYYY/MM/DD':
        params.dateSeparator = '/';
        params.yearIndex = 0;
        params.yearLength = 4;
        params.minYear = 1950;
        params.maxYear = new Date().getFullYear();
        params.dayIndex = 2;
        break;
      case 'DD MMMM YYYY':
        params.dateSeparator = ' ';
        params.yearIndex = 2;
        params.yearLength = 4;
        params.minYear = 1950;
        params.maxYear = 2050;
        params.dayIndex = 0;
        break;
      case 'DD-MMM-YY':
        params.dateSeparator = '-';
        params.yearIndex = 2;
        params.yearLength = 2;
        params.minYear = new Date().getFullYear() % 100;
        params.maxYear = 50;
        params.dayIndex = 0;
    }

    if (checkDateFormat(control.value, params.dateSeparator)) {
      return {incorrectFormat: true};
    }

    const year: number = +control.value.split(params.dateSeparator)[params.yearIndex];
    // const month = control.value.split(params.dateSeparator)[1];
    // const day = control.value.split(params.dateSeparator)[params.dayIndex];

    if (checkDateYearFormat(year, params.yearLength)) {
      return {incorrectYearFormat: true};
    }
    if (checkDateYear(year, params.minYear, params.maxYear)) {
      return {incorrectYear: true};
    }
    return null;
  }
  return null;
  };
