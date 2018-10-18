import {checkInputSymbols} from  './checkInputSymbols';

export const checkInputsSymbols = {
  errName: 'incorrectSymbols',
  numbers: ['0','1','2','3','4','5','6','7','8','9'],
  letters: [
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
  ],

  name:function (){return checkInputSymbols(this.letters, this.errName)},
  age: function (){return checkInputSymbols(this.numbers, this.errName)},
  dateOfBirth: function (separator: string) {return checkInputSymbols(this.numbers.concat(separator), this.errName)},
  dateOfLogin: function (separator: string) {return checkInputSymbols(this.numbers.concat(separator, this.letters), this.errName)},
  dateOfNotif: function (separator: string) {return checkInputSymbols(this.numbers.concat(separator, this.letters), this.errName)}
};



