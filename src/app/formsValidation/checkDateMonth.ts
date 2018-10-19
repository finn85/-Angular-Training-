export const checkDateMonth = (month: string, format: string): boolean => {
  const months = {
    mm: ['01','02','03','04','05','06','07','08','09','10','11','12'],
    mmm: ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec'],
    mmmm: ['january','february','march','april','may','june','july','august','september','october','november','december']
  };
  switch (format) {
    case 'YYYY/MM/DD':
      return (!months.mm.some((m) => m === month.toLowerCase()));
    case 'DD MMMM YYYY':
      return (!months.mmmm.some((m) => m === month.toLowerCase()));
    case 'DD-MMM-YY':
      return (!months.mmm.some((m) => m === month.toLowerCase()));
  }
  return false;
};
