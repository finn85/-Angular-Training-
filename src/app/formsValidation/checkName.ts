import {FormControl} from '@angular/forms';
import {checkNameOnlyTwoWords} from './checkNameOnlyTwoWords';

export const checkName = (control: FormControl): {[s:string]: boolean}|null => {
  if (control.value !== null) {
    const name = control.value;

    if (checkNameOnlyTwoWords(name)) {
      return {moreThanTwoWords: true};
    }
    return null;
  }
  return null;
};
