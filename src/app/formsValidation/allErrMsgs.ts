export const allErrMsgs: {[key: string]: {[key: string]: string}} = {
  name: {
    required: 'Name is required',
    incorrectSymbols: 'Please, enter english letters only',
    noPascalCase: 'Please, enter a first letter in each word in upper case, other letters - in lower case',
    moreThanTwoWords: 'Please, use one or two words, no more'
  },
  age: {
    required: 'Age is required',
    incorrectSymbols: 'Please, enter integer number only',
    incorrectInterval: 'Please, enter integer number from 18 to 65'
  },
  dateOfBirth: {
    required: 'Birthday is required',
    incorrectSymbols: 'Please, enter numbers and "/" only',
    incorrectFormat: 'Correct format is "YYYY/MM/DD"',
    incorrectYearFormat: 'Correct year format is "YYYY"',
    incorrectYear: 'Please enter year from 1950 till current',
    incorrectMonth: 'Please check month (example - 01, 02 ... 12)',
    incorrectDayFormat: 'Please check date (example - 01, 02 ...)',
    incorrectDay: 'Please check date (number of days in a month)'

  },
  dateOfLogin: {
    required:'Date of login is required',
    incorrectSymbols: 'Please, enter numbers, english letters and spaces only',
    incorrectFormat: 'Correct format is "DD MMMM YYYY"',
    incorrectYearFormat: 'Correct year format is "YYYY"',
    incorrectYear: 'Please enter year from 1950 till 2050',
    incorrectMonth:'Please check month (example - january)',
    incorrectDayFormat: 'Please check date (example - 01, 02 ...)',
    incorrectDay: 'Please check date (number of days in a month)'
  },
  dateOfNotif: {
    required: 'Date of notification is required',
    incorrectSymbols: 'Please, enter numbers, english letters and "-" only',
    incorrectFormat: 'Correct format is "DD-MMM-YY"',
    incorrectYearFormat: 'Correct year format is "YY"',
    incorrectYear: 'Please enter year from current till 50',
    incorrectMonth:'Please check month (example - jan)',
    incorrectDayFormat: 'Please check date (example - 01, 02 ...)',
    incorrectDay: 'Please check date (number of days in a month)'
  }
};
