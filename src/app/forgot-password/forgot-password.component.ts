import {Component, DoCheck, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';

import {UserService} from '../user.service';
import {SpinnerService} from '../spinner.service';

import {selectErrMsg} from '../formsValidation/selectErrMsg';
import {allErrMsgs} from '../formsValidation/allErrMsgs';
import {asyncLoginNameValidator} from '../formsValidation/asyncLoginNameValidator';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements DoCheck, OnInit{

  linksIsHide: boolean = true;
  password: string = 'test';
  showPassword: boolean = false;

  passRecoveryForm!: FormGroup;
  loginNameCtrl!: FormControl;

  constructor(
    private userService: UserService,
    private spinnerService: SpinnerService
  ){}

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
    if (this.loginNameCtrl.pending) {
      this.showPassword = false;
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

  getPassword = () => {
    this.spinnerService.spinner.start();
    this.userService.getPassword(this.passRecoveryForm.value)
      .subscribe((data: any) => {
        this.password = data.message;
        this.showPassword = true;
        this.spinnerService.spinner.stop()
      })
  };

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.passRecoveryForm.valid && !this.passRecoveryForm.pending) {
      this.getPassword();
    }
  }
}
