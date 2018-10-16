import {FormControl} from "@angular/forms";

function validNumbers(control: FormControl): {[s:string]:boolean}|null {

  const errName: string = 'notANumber';
  const validSymbols: string[] = [
    '0','1','2','3','4','5','6','7','8','9'
  ];

  if (control.value !== null){
    const symbolsArr: string[] = control.value.split('');

    const valueIsInvalid: boolean = symbolsArr.every( (curSymbol) => {

      return validSymbols.some((patternSymbol: string) => {

        return !(curSymbol === patternSymbol);
      })
    });

    return {[errName]: valueIsInvalid};
  } else {
    return null;
  }
}

export {validNumbers};
