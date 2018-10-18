import {FormControl} from '@angular/forms';

export const checkDateYearFormat = (fullFormat: string) =>
  (control: FormControl): {[s:string]: boolean}|null => {

    if (control.value !== null) {
      const errName:string = 'incorrectYearFormat';

      switch (fullFormat){
        case 'YYYY/MM/DD': {
          const year = control.value.split('/')[0];

          if (year !== undefined && (year.length !== 4 || isNaN(Number(year)))){
            return {[errName]: true}
          } else {
            return null;
          }
        }
        case 'DD MMMM YYYY': {
          const year = control.value.split(' ')[2];

          if (year !== undefined && (year.length !== 4 || isNaN(Number(year)))){
            return {[errName]: true}
          } else {
            return null;
          }
        }
        case 'DD-MMM-YY': {
          const year = control.value.split('-')[2];

          if (year !== undefined && (year.length !== 2 || isNaN(Number(year)))) {
            return {[errName]: true}
          } else {
            return null;
          }
        }
      }
    }
    return null;
  };
