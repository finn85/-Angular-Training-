export const checkDateYearFormat = (year: string, length: number): boolean => {

  return (year !== undefined && (year.length !== length || isNaN(+year)));
};
