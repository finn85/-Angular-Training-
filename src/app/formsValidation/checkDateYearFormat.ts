export const checkDateYearFormat = (year: number, length: number): boolean => {

  return (year !== undefined && (year.toString().length !== length || isNaN(year)));
};
