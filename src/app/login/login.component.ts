import {Component, DoCheck, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from '../user.service';
import {SpinnerService} from '../spinner.service';
import {ValidationService} from "../validation.service";

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
    private cookie: CookieService,
    private router: Router,
    public translate: TranslateService,
    private spinner: SpinnerService,
    private validation: ValidationService
  ){}

  ngOnInit() {
    if (this.cookie.get('id')) {
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
  };

  ngDoCheck() {
    if (this.loginNameCtrl.invalid && this.loginNameCtrl.dirty) {
      this.validation.defineErr(this.loginNameCtrl);
    }
    if (this.passwordCtrl.invalid && this.passwordCtrl.dirty) {
      this.validation.defineErr(this.passwordCtrl);
    }
    if (this.loginForm.pending) {
      this.dataIsIncorrect = false;
    }
    this.translate.use(this.cookie.get('lang'));
  };

  submit = () => {
    this.spinner.start();
    this.userService.checkUserLoginAndPassword(this.loginForm.value)
      .subscribe((data: boolean) => {
          if (data) {
            this.router.navigate(['/userProfile']);
            this.spinner.stop();
          } else {
            this.dataIsIncorrect = true;
            this.spinner.stop();
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
