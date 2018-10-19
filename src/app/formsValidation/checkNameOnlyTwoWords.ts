export const checkNameOnlyTwoWords = (name: string): boolean => {
  const wordsOfName: string[] = name.split(' ');
  const caps: string[] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  switch (wordsOfName.length) {
    case 2:
      const firstCuttedName: string = wordsOfName[0].substring(1);
      const secondCuttedName: string = wordsOfName[1].substring(1);
      const capsInFirstName: string[] = firstCuttedName.split('').filter(function(letter){
        return ~caps.indexOf(letter);
      });
      const capsInSecondName: string[] = secondCuttedName.split('').filter(function(letter){
        return ~caps.indexOf(letter);
      });
      return (capsInFirstName.length > 0 || capsInSecondName.length > 0);
    case 1:
      const cuttedName = name.substring(1);

      const allCaps = cuttedName.split('').filter(function(letter){
        return ~caps.indexOf(letter);
      });

      return (allCaps.length > 1);
    default:
      return (wordsOfName.length > 2);
  }
};
