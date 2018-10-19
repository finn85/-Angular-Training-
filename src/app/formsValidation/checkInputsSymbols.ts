import {checkInputSymbols} from  './checkInputSymbols';

export const checkInputsSymbols = {
  errName: 'incorrectSymbols',
  numbers: '0123456789'.split(''),
  letters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),

  name:function (){return checkInputSymbols(this.letters.concat(' '), this.errName)},
  age: function (){return checkInputSymbols(this.numbers, this.errName)},
  dateOfBirth: function (separator: string) {return checkInputSymbols(this.numbers.concat(separator), this.errName)},
  dateOfLogin: function (separator: string) {return checkInputSymbols(this.numbers.concat(separator, this.letters), this.errName)},
  dateOfNotif: function (separator: string) {return checkInputSymbols(this.numbers.concat(separator, this.letters), this.errName)}
};



