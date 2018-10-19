export const checkDateYear = (year: string, minYear: number, maxYear: number): boolean => {

  return (+year > maxYear || +year < minYear);
};
