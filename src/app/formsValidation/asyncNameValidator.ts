import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {delay} from 'rxjs/operators';
import {Observer} from 'rxjs/internal/types';
import {required,
        checkSymbols,
        checkPascalCase,
        checkMoreThanTwoWords} from './validationFunctions';


export const asyncNameValidator: AsyncValidatorFn = (control: AbstractControl) => {

  const valueStr: string = (control.value !==null) ? control.value.trim() : '';
  const validSymbols: string[] = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ '.split('');

  return Observable.create((observer: Observer<ValidationErrors|null>) => {
    if (required(valueStr, control)) {
      observer.next({required: 'true'});
      observer.complete();
    }
    if (checkSymbols(validSymbols, valueStr)) {
      observer.next({incorrectSymbols: 'true'});
      observer.complete();
    }
    if (checkMoreThanTwoWords(valueStr)) {
      observer.next({moreThanTwoWords: 'true'});
      observer.complete();
    }
    if (checkPascalCase(valueStr)) {
      observer.next({noPascalCase: 'true'});
      observer.complete();
    }
    observer.next(null);
    observer.complete();
  }).pipe(delay(3000));
};

