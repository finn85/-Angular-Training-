import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {Observer} from 'rxjs/internal/types';
import {required, checkSymbols } from './validationFunctions';
import {delay} from "rxjs/operators";

export const asyncLoginNameValidator: AsyncValidatorFn = (control: AbstractControl) => {

  const value: string = (control.value !==null) ? control.value.trim() : '';
  const validSymbols: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
  const delayVal: number = 1500;
  const ctrlName: string = 'loginName';

  return Observable.create((observer: Observer<ValidationErrors|null>) => {
    if (required(value, control)) {
      observer.next({type: 'required', target: ctrlName});
      observer.complete();
    }
    if (checkSymbols(validSymbols, value)) {
      observer.next({type: 'incorrectSymbols', target: ctrlName});
      observer.complete();
    }
    observer.next(null);
    observer.complete();
  }).pipe(delay(delayVal))
};

