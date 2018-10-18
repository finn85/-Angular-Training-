import {FormControl} from '@angular/forms';

export const checkDateYearFormat = (fullFormat: string) =>
  (control: FormControl): {[s:string]: boolean}|null => {

    if (control.value !== null) {
      const errName:string = 'incorrectYearFormat';
      const params: {length: number, index: number, separator: string} = {
        length: 0,
        index: 0,
        separator: ""
      };

      switch (fullFormat){
        case 'YYYY/MM/DD':
          params.length = 4;
          params.index = 0;
          params.separator = '/';
          break;
        case 'DD MMMM YYYY':
          params.length = 4;
          params.index = 2;
          params.separator = ' ';
          break;
        case 'DD-MMM-YY':
          params.length = 2;
          params.index = 2;
          params.separator = '-';
          break;
      }

      const year = control.value.split(params.separator)[params.index];

      if (year !== undefined && (year.length !== params.length || isNaN(Number(year)))) {
        return {[errName]: true}
      } else {
        return null;
      }
    }
    return null;
  };
