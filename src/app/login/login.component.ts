import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {selectErrMsg} from "../formsValidation/selectErrMsg";
import {allErrMsgs} from "../formsValidation/allErrMsgs";
import {asyncLoginNameValidator} from "../formsValidation/asyncLoginNameValidator";
import {asyncPasswordValidator} from "../formsValidation/asyncPasswordValidator";
import {UserService} from "../user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements DoCheck,OnInit {

  loginForm!: FormGroup;
  loginNameCtrl!: FormControl;
  passwordCtrl!: FormControl;

  constructor(private userService: UserService){}

  ngOnInit() {
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

  }

  placeholders = {
    loginName: 'One word (numbers and letters)',
    password: 'One word (numbers and letters)'
  };

  errMsgs: ValidationErrors = {
    loginName: null,
    password: null
  };

  authentication = {
    success: false,

  };

  getErrMsg = (controlName: string): void => {
    this.errMsgs[controlName] = selectErrMsg(this.loginForm, controlName, allErrMsgs[controlName]);
  };

  submit = () => {
    this.userService.checkUserLoginAndPassword(this.loginForm.value)
      .subscribe((data: boolean) => {
        console.log(data);
      })
  }
}
