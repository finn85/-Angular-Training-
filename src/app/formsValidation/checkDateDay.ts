export const checkDateDay = (month: string, dayStr: string): boolean => {
  const day = +dayStr;
  const thirtyOne = ['01','03','05','07','08','10','12',
                     'jan','mar','may','jul','aug','oct','dec',
                     'january','march','july','august','october','december'];
  const thirty = ['04','06','09','11',
                  'apr','jun','sep','nov',
                  'april','june','september','november'];
  const twentyNine = ['02', 'feb', 'february'];

  if (thirtyOne.some((m) => month === m)) {
    return (day > 31);
  }
  if (thirty.some((m) => month === m)) {
    return (day > 30);
  }
  if (twentyNine.some((m) => month === m)) {
    return (day > 29);
  }
  return (day < 1);
};
