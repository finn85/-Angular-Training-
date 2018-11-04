import {Component, DoCheck, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

import {TranslateService} from '@ngx-translate/core';
import {UserService} from '../user.service';
import {SpinnerService} from '../spinner.service';

import {asyncLoginNameValidator} from '../forms-validation/asyncLoginNameValidator';
import {CookieService} from 'ngx-cookie-service';
import {ValidationService} from '../validation.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})

export class ForgotPasswordComponent implements DoCheck, OnInit{

  linksIsHide: boolean = true;
  password!: string;
  showPassMessage: boolean = false;
  showPassErr: boolean = false;

  passRecoveryForm!: FormGroup;
  loginNameCtrl!: FormControl;

  constructor(
    private userService: UserService,
    private spinner: SpinnerService,
    public translate: TranslateService,
    private cookie: CookieService,
    private validation: ValidationService
  ){}

  ngOnInit() {
    this.passRecoveryForm = new FormGroup({
      'loginName': this.loginNameCtrl = new FormControl(null,[],[
        asyncLoginNameValidator
      ]),
    });
  };

  ngDoCheck() {
    if (this.loginNameCtrl.invalid && this.loginNameCtrl.dirty) {
      this.validation.defineErr(this.loginNameCtrl);
    }
    if (this.loginNameCtrl.pending) {
      this.showPassMessage = false;
    }
    this.translate.use(this.cookie.get('lang'));
  };

  getPassword = () => {
    this.spinner.start();
    this.userService.getPassword(this.passRecoveryForm.value)
      .subscribe((data: any) => {
        this.showPassMessage = true;
        if (data.message === false) {
          this.showPassErr = true;
        } else {
          this.showPassErr = false;
          this.password = data.message;
        }
        this.spinner.stop()
      })
  };

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.passRecoveryForm.valid && !this.passRecoveryForm.pending) {
      this.getPassword();
    }
  }
}
