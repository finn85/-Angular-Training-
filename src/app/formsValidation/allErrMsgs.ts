export const allErrMsgs: {[key: string]: {[key: string]: string}} = {
  name: {
    required: 'please, enter your name'
  },
  age: {
    required: 'Age is required',
    notANumber: 'Please, enter numbers',
    lessThan18: 'Your age is less than 18',
    moreThan65: 'Your age is more than 65'
  },
  dateOfBirth: {
    required: 'please, enter your birthday',
    incorrectFormat: 'Incorrect. Correct date format: YYYY/MM/DD'
  },
  dateOfLogin: {
    required:'please, enter date of your login'
  },
  dateOfNotif: {
    required: 'please, enter date of notification'
  }
};
