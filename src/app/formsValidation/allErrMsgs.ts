export const allErrMsgs: {[key: string]: {[key: string]: string}} = {
  name: {
    required: 'please, enter your name'
  },
  age: {
    required: 'Age is required',
    notNumbers: 'Please, enter numbers only',
    lessThan18: 'Your age is less than 18',
    moreThan65: 'Your age is more than 65'
  },
  dateOfBirth: {
    required: 'Birthday is required',
    notNumsAndSeprs: 'Please, enter numbers and "/" only'
    // incorrectFormat: 'Incorrect. Correct date format: YYYY/MM/DD'
  },
  dateOfLogin: {
    required:'please, enter date of your login'
  },
  dateOfNotif: {
    required: 'please, enter date of notification'
  }
};
