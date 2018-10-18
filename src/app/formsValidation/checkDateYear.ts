import {FormControl} from '@angular/forms';

export const checkDateOfBirthYear = (control: FormControl): {[s:string]: boolean}|null => {

  if (control.value !== null) {
    const errName:string = 'incorrectYear';
    const minYear: number = 1950;
    const maxYear = new Date().getFullYear();

    const year = Number(control.value.split('/')[0]);
    if (year > maxYear || year < minYear) {
      return {[errName]: true}
    } else {
      return null;
    }
  }
  return null;
};

export const checkDateOfLoginYear = (control: FormControl): {[s:string]: boolean}|null => {

  if (control.value !== null) {
    const errName:string = 'incorrectYear';
    const minYear: number = 1950;
    const maxYear = 2050;

    const year = Number(control.value.split(' ')[2]);
    if (year > maxYear || year < minYear) {
      return {[errName]: true}
    } else {
      return null;
    }
  }
  return null;
};

export const checkDateOfNotifYear = (control: FormControl): {[s:string]: boolean}|null => {

  if (control.value !== null) {
    const errName:string = 'incorrectYear';
    const minYear: number = new Date().getFullYear() % 100;
    const maxYear = 50;

    const year = Number(control.value.split('-')[2]);
    if (year > maxYear || year < minYear) {
      return {[errName]: true}
    } else {
      return null;
    }
  }
  return null;
};
