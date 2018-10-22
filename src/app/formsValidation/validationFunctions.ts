import {AbstractControl} from "@angular/forms";
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

export const checkPascalCase = (value: string) => {
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

