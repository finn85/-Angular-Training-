import {FormControl} from "@angular/forms";

export const checkDateFormat = (format: string) => (control: FormControl): {[s:string]: boolean}|null => {

  if (control.value !== null) {
    const errName: string = 'incorrectFormat';

    switch (format) {
      case 'YYYY/MM/DD':
        const value: string[] = control.value.split('/');
        const year: number = +value[0];
        const month: number = +value[1];
        const day: number = +value[2];
        console.log(value);
        console.log(year);
        console.log(month);
        console.log(day);
        console.log(day.toString().length);

        if (
          year.toString().length !== 4 ||
          month.toString().length !== 2 ||
          day.toString().length !== 2) {
          return {[errName]: true}
        } else {
          return null;
        }
    }
    return {[errName]: true};
  }
  return null;
};
//todo FORMAT ERRORS
//todo  only numbers and separators
//todo  should be 3 numbers => after split arr.length === 3
//todo  separator is valid
//todo  every number should be has strict length
//todo  without empty numbers

//todo CONTENT ERRORS
//todo month should be from 1 till 12
//todo day should be from 1 till 31
//todo year should be from 2000 till 2100
//todo date birth should be from 18 till 65 years ago
//todo date of login should be current date
//todo date of notification should be future date
