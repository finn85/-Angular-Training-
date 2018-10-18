import {FormControl} from "@angular/forms";

export const checkDateFormat = (separator: string) =>
  (control: FormControl): { [key: string]: boolean } | null => {

    if (control.value !== null) {
      const errName = 'incorrectFormat';
      const dateParts = control.value.split(separator);
      if (dateParts.length !== 3) {
        return {[errName]: true};
      } else {
        return null;
      }
    }
    return null;
  };
