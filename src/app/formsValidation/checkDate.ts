import {FormControl} from '@angular/forms';

export const checkDate = (fullFormat: string) =>
  (control: FormControl): {[s:string]: boolean}|null => {
  if (control.value !== null) {
    const params: {[key: string]: string|number|null} = {
      dateSeparator: '',
      yearIndex: 0,
      yearLength:0,
      minYear: 0,
      maxYear: 0,

      dayIndex: 0,

    };

    switch (fullFormat){
      case 'YYYY/MM/DD':
        params.dateSeparator = '/';
        params.yearIndex = 0;
        params.yearLength = 4;
        params.minYear = 1950;
        params.maxYear = new Date().getFullYear();
    }
  }

  return null;
  };
