import {FormGroup} from "@angular/forms";
//todo interface for messages
export const selectErrMsg = (formName: FormGroup, controlName: string, messages: {[key: string]: string} ): string|null => {

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
