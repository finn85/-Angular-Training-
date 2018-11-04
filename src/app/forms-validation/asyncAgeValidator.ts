import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {Observer} from 'rxjs/internal/types';
import {checkSymbols,
        checkNumberInterval,
        required} from './validationFunctions';
import {delay} from "rxjs/operators";


export const asyncAgeValidator: AsyncValidatorFn = (control: AbstractControl) => {

  const valueStr: string = (control.value !==null) ? control.value.trim() : '';
  const valueNumb: number = Number(valueStr);
  const validSymbols: string[] = '0123456789'.split('');
  const delayVal: number = 1500;
  const ctrlName: string = 'age';

  return Observable.create((observer: Observer<ValidationErrors|null>) => {
    if (required(valueStr, control)) {
      observer.next({type: 'required', target: ctrlName});
      observer.complete();
    }
    if (checkSymbols(validSymbols, valueStr)) {
      observer.next({type: 'incorrectSymbols', target: ctrlName});
      observer.complete();
    }
    if (checkNumberInterval(valueNumb, 18, 65)) {
      observer.next({type: 'incorrectInterval', target: ctrlName});
      observer.complete();
    }
    observer.next(null);
    observer.complete();
  }).pipe(delay(delayVal))
};

