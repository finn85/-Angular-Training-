export const checkSymbols = (validSymbols: string[], value: string): boolean => {

  const arrOfSymbols = value.split('');

  return ! arrOfSymbols.every((curSymbol: string) => {
    return validSymbols.some((patternSymbol: string) => {
      return (curSymbol === patternSymbol);
    })
  });
};
