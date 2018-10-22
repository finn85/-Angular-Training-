import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs/internal/Observable';
import {delay} from 'rxjs/operators';
import {Observer} from 'rxjs/internal/types';
import {checkSymbols,
        checkNumberInterval,
        required} from './validationFunctions';


export const asyncAgeValidator: AsyncValidatorFn = (control: AbstractControl) => {

  const valueStr: string = (control.value !==null) ? control.value.trim() : '';
  const valueNumb: number = Number(valueStr);
  const validSymbols: string[] = '0123456789'.split('');

  return Observable.create((observer: Observer<ValidationErrors|null>) => {
    if (required(valueStr, control)) {
      observer.next({required: 'true'});
      observer.complete();
    }
    if (checkSymbols(validSymbols, valueStr)) {
      observer.next({incorrectSymbols: 'true'});
      observer.complete();
    }
    if (checkNumberInterval(valueNumb, 18, 65)) {
      observer.next({incorrectInterval: 'true'});
      observer.complete();
    }
    observer.next(null);
    observer.complete();
  }).pipe(delay(3000));
};
