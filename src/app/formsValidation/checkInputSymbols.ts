import {FormControl} from "@angular/forms";
import {checkSymbols} from "./checkSymbols";

export const checkInputSymbols = (validSymbols: string[], errName: string) =>
  (control: FormControl): { [key: string]: boolean } | null => {
    if (control.value !== null) {
      const valueIsValid = checkSymbols(validSymbols, control.value);

      return (valueIsValid ? null : {[errName]: true});
    }
    return null;
  };
