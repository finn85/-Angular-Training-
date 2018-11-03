import {FormGroup, ValidationErrors} from "@angular/forms";

export const selectErrMsg = (formName: FormGroup, controlName: string, messages: ValidationErrors) => {

  const errObj = formName.controls[controlName].errors;

  for (let err in messages){
    if (messages.hasOwnProperty(err)){
      if (errObj !== null && errObj.hasOwnProperty(err)){
        return messages[err];
      }
    }
  }

  return null;
};
