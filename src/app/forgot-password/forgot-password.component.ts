import {Component, DoCheck} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {selectErrMsg} from "../formsValidation/selectErrMsg";
import {allErrMsgs} from "../formsValidation/allErrMsgs";
import {asyncLoginNameValidator} from "../formsValidation/asyncLoginNameValidator";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements DoCheck{

  passRecoveryForm: FormGroup;
  loginNameCtrl: FormControl;
  loginNameVal: string;

  constructor(){
    this.passRecoveryForm = new FormGroup({
      'loginName': this.loginNameCtrl = new FormControl(null,[],[
        asyncLoginNameValidator
      ]),
    });
    this.loginNameVal = this.loginNameCtrl.value;
  }

  ngDoCheck() {
    if (!this.loginNameCtrl.pending && this.loginNameCtrl.dirty) {
      this.getErrMsg('loginName');
    }
  }

  placeholders = {
    loginName: 'One word (numbers and letters)',
  };

  errMsgs: ValidationErrors = {
    loginName: null
  };

  getErrMsg = (controlName: string): void => {
    this.errMsgs[controlName] = selectErrMsg(this.passRecoveryForm, controlName, allErrMsgs[controlName]);
  };
}
