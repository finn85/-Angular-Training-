import {FormControl} from "@angular/forms";

function validNumbers(control: FormControl): {[s:string]:boolean}|null {

  if (control.value !== null) {

    const errName: string = 'notANumber';
    const validSymbols: string[] = [
      '0','1','2','3','4','5','6','7','8','9'
    ];
    const symbolsArr: string[] = control.value.split('');
    const valueIsValid: boolean = symbolsArr.every((curSymbol: string) => {
      return validSymbols.some((patternSymbol: string) => {
        return (curSymbol === patternSymbol);
      });
    });

    return (valueIsValid ? null : {[errName]: true});

  } else {

    return null;

  }
}

export {validNumbers};
