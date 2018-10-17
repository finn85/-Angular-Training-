import {FormControl} from "@angular/forms";
import {checkSymbols} from "./checkSymbols";

export const checkIsNumbers = (control: FormControl): {[key:string]: boolean}|null => {

  if (control.value !== null) {
    const errName: string = 'notANumber';
    const validSymbols: string[] = [
      '0','1','2','3','4','5','6','7','8','9'
    ];

    const valueIsValid = checkSymbols(validSymbols, control.value);

    return (valueIsValid ? null : {[errName]: true});
  }
  return null;
};
