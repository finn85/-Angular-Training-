import {AsyncValidatorFn} from "@angular/forms";
import {Observable} from "rxjs/internal/Observable";
import {delay} from "rxjs/operators";

export const asyncTestValidator: AsyncValidatorFn = (control) => {
  const value = control.value;
  return Observable.create((observer: any) => {

    if (value < 18 || value > 65 || isNaN(value)) {
      console.log(control);
      observer.next({incorrectSymbols: 'true'});
      observer.complete();
    }

    observer.next(null);
    observer.complete();
  }).pipe(delay(3000));
};

