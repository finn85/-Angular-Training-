import {AbstractControl} from "@angular/forms";
import {validatedDataInterface} from "./interfaceValidatedData";
//common
export const required = (value: string, control: AbstractControl): boolean =>
  (value === '' && control.dirty);

export const checkSymbols = (validSymbols: string[], value: string): boolean => {
  const arrOfSymbols = value.split('');

  return ! arrOfSymbols.every((curSymbol: string) => {
    return validSymbols.some((patternSymbol: string) => {
      return (curSymbol === patternSymbol);
    })
  });
};
//name
export const checkMoreThanTwoWords = (value: string):boolean => {
  const words: string[] = value
    .split(' ')
    .filter((i) => i !== "");

  return (words.length > 2);
};

export const checkPascalCase = (value: string): boolean => {
  const firstLetters:  string = value
    .split(' ')
    .filter((i) => i !== "")
    .map((i) => i.substring(0,1))
    .join('');
  const otherLetters: string = value
    .split(' ')
    .filter((i) => i !== "")
    .map((i) => i.substring(1))
    .join('');
  const lowerCaseSymbols: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperCaseSymbols: string[] = lowerCaseSymbols.map((i) => i.toUpperCase());

  return (checkSymbols(lowerCaseSymbols, otherLetters) || checkSymbols(upperCaseSymbols, firstLetters));
};
//age
export const checkNumberInterval = (value:number,minNumber: number, maxNumber: number): boolean =>
  (value < minNumber || value > maxNumber);
//dates
export const checkDateFormat = (value: string, separator: string): boolean =>
  (value.split(separator).length !== 3);

export const checkDateYearFormat = (year: string, length: number): boolean =>
  (year !== undefined && (year.toString().length !== length || isNaN(+year)));

export const checkDateYear = (year: number, minYear: number, maxYear: number): boolean =>
  (year > maxYear || year < minYear);

export const checkDateMonth = (month: string, format: string): boolean => {
  const months = {
    mm: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    mmm: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
    mmmm: ['january','february','march','april','may','june','july','august','september','october','november','december']
  };
  switch (format) {
    case 'MM':
      return (!months.mm.some((m) => m === month));
    case 'MMM':
      return (!months.mmm.some((m) => m === month));
    case 'MMMM':
      return (!months.mmmm.some((m) => m === month));
  }
  return false;
};

export const checkDateDayFormat = (day: string): boolean =>
  (day !== undefined && (day.length !== 2 || isNaN(+day)));

export const checkDateDay = (month: string, day: number): boolean => {
  const thirtyOne = ['01','03','05','07','08','10','12',
    'jan','mar','may','jul','aug','oct','dec',
    'january','march','july','august','october','december'];
  const thirty = ['04','06','09','11',
    'apr','jun','sep','nov',
    'april','june','september','november'];
  const twentyNine = ['02', 'feb', 'february'];

  if (thirtyOne.some((m) => month === m)) {
    return (day > 31 || day < 1);
  }
  if (thirty.some((m) => month === m)) {
    return (day > 30 || day < 1);
  }
  if (twentyNine.some((m) => month === m)) {
    return (day > 29 || day < 1);
  }
  return false;
};
//addition
export const clearFromSpaces = (value: string): string =>
  (value.trim().split('').filter((i) => i !== ' ').join(''));

export const clearFromMoreThenOneSpace = (value: string): string =>
  value.trim().split('').filter((i,ind, arr) => i !== ' ' || (i === ' ' && arr[++ind] !== ' ')).join('');

export const covertDateFormat = (source: validatedDataInterface, name: string, inputFormat: string): void => {
  switch (inputFormat) {
    case 'DD MMMM YYYY': {
      const day: string = source[name].split(' ')[0];
      const month: string = source[name].split(' ')[1];
      const newMonth = (month: string): string => {
        switch (month) {
          case 'january': return '01';
          case 'february': return '02';
          case 'march': return '03';
          case 'april': return '04';
          case 'may': return '05';
          case 'june': return '06';
          case 'july': return '07';
          case 'august': return '08';
          case 'september': return '09';
          case 'october': return '10';
          case 'november': return '11';
          case 'december': return '12';
          default: return '';
        }
      };
      const year: string = source[name].split(' ')[2];

      source[name] = year + '/' + newMonth(month) + '/' + day;
      break;
    }
    case 'DD-MMM-YY': {
      const day: string = source[name].split('-')[0];
      const month: string = source[name].split('-')[1];
      const newMonth = (month: string): string => {
        switch (month) {
          case 'jan': return '01';
          case 'feb': return '02';
          case 'mar': return '03';
          case 'apr': return '04';
          case 'may': return '05';
          case 'jun': return '06';
          case 'jul': return '07';
          case 'aug': return '08';
          case 'sep': return '09';
          case 'oct': return '10';
          case 'nov': return '11';
          case 'dec': return '12';
          default: return '';
        }
      };
      const year: string = source[name].split('-')[2];
      const newYear: string = '20' + year;

      source[name] = newYear + '/' + newMonth(month) + '/' + day;
    }
  }
};
