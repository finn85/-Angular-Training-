import {FormControl} from "@angular/forms";
import {checkSymbols} from "./checkSymbols";

export const checkIsNumsAndSeprs = (separator: string) => (control: FormControl): {[key:string]: boolean}|null => {

  if (control.value !== null) {
    const errName: string = 'notNumsAndSeprs';
    const validSymbols: string[] = [
      '0','1','2','3','4','5','6','7','8','9', separator
    ];

    const valueIsValid = checkSymbols(validSymbols, control.value);

    return (valueIsValid ? null : {[errName]: true});
  }
  return null;
};
