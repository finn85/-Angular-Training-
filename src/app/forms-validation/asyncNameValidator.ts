import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {Observer} from 'rxjs/internal/types';
import {required,
        checkSymbols,
        checkPascalCase,
        checkMoreThanTwoWords} from './validationFunctions';
import {delay} from "rxjs/operators";


export const asyncNameValidator: AsyncValidatorFn = (control: AbstractControl) => {

  const value: string = (control.value !==null) ? control.value.trim() : '';
  const validSymbols: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');
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
    if (checkMoreThanTwoWords(value)) {
      observer.next({moreThanTwoWords: 'true'});
      observer.complete();
    }
    if (checkPascalCase(value)) {
      observer.next({noPascalCase: 'true'});
      observer.complete();
    }
    observer.next(null);
    observer.complete();
  }).pipe(delay(delayVal))
};

