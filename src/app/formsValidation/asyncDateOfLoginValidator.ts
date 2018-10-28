import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {Observer} from 'rxjs/internal/types';
import {
  checkSymbols,
  required,
  clearFromMoreThenOneSpace,
  checkDateFormat,
  checkDateYearFormat,
  checkDateYear,
  checkDateMonth,
  checkDateDayFormat,
  checkDateDay
} from './validationFunctions';
import {delay} from "rxjs/operators";


export const asyncDateOfLoginValidator: AsyncValidatorFn = (control: AbstractControl) => {

  const value: string = (control.value !==null) ? clearFromMoreThenOneSpace(control.value) : '';
  const validSymbols: string[] = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');
  const dayStr: string = value.split(' ')[0];
  const day: number = +value.split(' ')[0];
  const month: string = value.split(' ')[1];
  const yearStr: string = value.split(' ')[2];
  const year: number = +value.split(' ')[2];
  const delayVal: number = 1500;

  return Observable.create((observer: Observer<ValidationErrors|null>) => {
    if (required(value, control)) {
      observer.next({required: 'true'});
      observer.complete();
    }
    if (checkSymbols(validSymbols, value)) {
      observer.next({incorrectSymbols: 'true'});
      observer.complete();
    }
    if (checkDateFormat(value, ' ')) {
      observer.next({incorrectFormat: 'true'});
      observer.complete();
    }
    if (checkDateDayFormat(dayStr)) {
      observer.next({incorrectDayFormat: 'true'});
      observer.complete();
    }
    if (checkDateDay(month, day)) {
      observer.next({incorrectDay: 'true'});
      observer.complete();
    }
    if (checkDateMonth(month, 'MMMM')) {
      observer.next({incorrectMonth: 'true'});
      observer.complete();
    }
    if (checkDateYearFormat(yearStr, 4)) {
      observer.next({incorrectYearFormat: 'true'});
      observer.complete();
    }
    if (checkDateYear(year, 1950, 2050)) {
      observer.next({incorrectYear: 'true'});
      observer.complete();
    }
    observer.next(null);
    observer.complete();
  }).pipe(delay(delayVal))
};

