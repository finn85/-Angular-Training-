import {FormControl} from '@angular/forms';
import {DateParams} from "./DateParamsInterface";
import {checkDateFormat} from './checkDateFormat';
import {checkDateYearFormat} from './checkDateYearFormat';
import {checkDateYear} from './checkDateYear';
import {checkDateMonth} from "./checkDateMonth";
import {checkDateDay} from "./checkDateDay";
import {checkDateDayFormat} from "./checkDateDayFormat";

export const checkDate = (fullFormat: string) =>
  (control: FormControl): {[s:string]: boolean}|null => {

  if (control.value !== null) {

    const params: DateParams = ((format: string) => {
      switch (format){
        case 'YYYY/MM/DD':
          return {
            dateSeparator: '/',
            yearIndex: 0,
            yearLength: 4,
            minYear: 1950,
            maxYear: new Date().getFullYear(),
            dayIndex: 2
          };
        case 'DD MMMM YYYY':
          return {
            dateSeparator: ' ',
            yearIndex: 2,
            yearLength: 4,
            minYear: 1950,
            maxYear: 2050,
            dayIndex: 0
          };
        default: //case 'DD-MMM-YY':
          return {
            dateSeparator: '-',
            yearIndex: 2,
            yearLength: 2,
            minYear: new Date().getFullYear() % 100,
            maxYear: 50,
            dayIndex: 0
          };
      }
    })(fullFormat);

    if (checkDateFormat(control.value, params.dateSeparator)) {
      return {incorrectFormat: true};
    }

    const year: string = control.value.split(params.dateSeparator)[params.yearIndex];
    const month: string = control.value.split(params.dateSeparator)[1].toLowerCase();
    const day: string = control.value.split(params.dateSeparator)[params.dayIndex];

    if (checkDateYearFormat(year, params.yearLength)) {
      return {incorrectYearFormat: true};
    }
    if (checkDateYear(year, params.minYear, params.maxYear)) {
      return {incorrectYear: true};
    }
    if (checkDateMonth(month, fullFormat)) {
      return {incorrectMonth: true};
    }
    if (checkDateDayFormat(day)) {
      return {incorrectDayFormat: true};
    }
    if (checkDateDay(month, day)) {
      return {incorrectDay: true}
    }
    return null;
  }
  return null;
};
