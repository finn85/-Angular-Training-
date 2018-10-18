export const checkDateYear = (year: number, minYear: number, maxYear: number) => {

  return (year > maxYear || year < minYear);
};
