import {Component, DoCheck, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

import {UserService} from '../user.service';
import {SpinnerService} from '../spinner.service';

import {selectErrMsg} from '../formsValidation/selectErrMsg';
import {allErrMsgs} from '../formsValidation/allErrMsgs';
import {asyncLoginNameValidator} from '../formsValidation/asyncLoginNameValidator';
import {asyncPasswordValidator} from '../formsValidation/asyncPasswordValidator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements DoCheck,OnInit {

  linksIsHide: boolean = true;
  dataIsIncorrect!: boolean;

  loginForm!: FormGroup;
  loginNameCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private router: Router,
    private spinnerService: SpinnerService
  ){}

  ngOnInit() {
    if (this.cookieService.get('id')) {
      this.router.navigate(['/userProfile'])
    }

    this.loginForm = new FormGroup({
      'loginName': this.loginNameCtrl = new FormControl(null,[],[
        asyncLoginNameValidator
      ]),
      'password': this.passwordCtrl = new FormControl(null,[],[
        asyncPasswordValidator
      ])
    })
  }

  ngDoCheck() {
    if (!this.loginNameCtrl.pending && this.loginNameCtrl.dirty) {
      this.getErrMsg('loginName');
    }
    if (!this.passwordCtrl.pending && this.passwordCtrl.dirty) {
      this.getErrMsg('password');
    }
    if (this.loginForm.pending) {
      this.dataIsIncorrect = false;
    }
  }

  placeholders = {
    loginName: 'One word (numbers and letters)',
    password: 'One word (numbers and letters)'
  };

  errMsgs: ValidationErrors = {
    loginName: null,
    password: null
  };

  getErrMsg = (controlName: string): void => {
    this.errMsgs[controlName] = selectErrMsg(this.loginForm, controlName, allErrMsgs[controlName]);
  };

  submit = () => {
    this.spinnerService.spinner.start();
    this.userService.checkUserLoginAndPassword(this.loginForm.value)
      .subscribe((data: boolean) => {
          if (data) {
            this.router.navigate(['/userProfile']);
            this.spinnerService.spinner.stop();
          } else {
            this.dataIsIncorrect = true;
            this.spinnerService.spinner.stop();
          }
      })
  };

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.loginForm.valid && !this.loginForm.pending) {
      this.submit()
    }
  }
}
