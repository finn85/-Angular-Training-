import {FormControl} from "@angular/forms";

export const checkNumberInterval = (minNumber: number, maxNumber: number) =>
  (control: FormControl): {[s:string]: boolean}|null => {

    if (control.value !== null) {
      const errNameLess: string = 'lessThan' + String(minNumber);
      const errNameMore: string = 'moreThan' + String(maxNumber);
      const value: number = +control.value;

      if (value < minNumber) {
        return {[errNameLess]: true};
      } else if (value > maxNumber) {
        return {[errNameMore]: true};
      } else {
        return null;
      }
    }
    return null;
  };
