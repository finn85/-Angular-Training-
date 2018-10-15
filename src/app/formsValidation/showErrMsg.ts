import {FormGroup} from "@angular/forms";

const showErrMsg = (formName: FormGroup, controlName: string, messages: object) => {

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

export {showErrMsg};
