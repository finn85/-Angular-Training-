import {Component, DoCheck, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from '@angular/forms';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';

import {UserService} from '../user.service';
import {SpinnerService} from '../spinner.service';

import {selectErrMsg} from '../forms-validation/selectErrMsg';
import {allErrMsgs} from '../forms-validation/allErrMsgs';
import {asyncLoginNameValidator} from '../forms-validation/asyncLoginNameValidator';
import {asyncPasswordValidator} from '../forms-validation/asyncPasswordValidator';

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
    public translate: TranslateService,
    private spinnerService: SpinnerService
  ){

  }

  ngOnInit() {

    this.translate.setDefaultLang('en');
    this.translate.use('en');

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
    });
    console.log(this.translate.get('login.plchold.loginName'),)
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
    this.translate.use(this.userService.curLang);
  }

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
