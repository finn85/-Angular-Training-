import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {selectErrMsg} from "../formsValidation/selectErrMsg";
import {allErrMsgs} from "../formsValidation/allErrMsgs";
import {asyncLoginNameValidator} from "../formsValidation/asyncLoginNameValidator";
import {UserService} from "../user.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements DoCheck, OnInit{

  passRecoveryForm!: FormGroup;
  loginNameCtrl!: FormControl;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.passRecoveryForm = new FormGroup({
      'loginName': this.loginNameCtrl = new FormControl(null,[],[
        asyncLoginNameValidator
      ]),
    });
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

  getPassword = this.userService.getPassword;
}
