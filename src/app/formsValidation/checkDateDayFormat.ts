export const checkDateDayFormat = (day: string): boolean => {

  return (day.length !== 2 || isNaN(+day));
};
