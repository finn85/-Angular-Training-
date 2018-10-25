import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginNameControl: FormControl;
  passwordControl: FormControl;
  loginNameValue: string;
  passwordValue: string;

  constructor(){
    this.loginForm = new FormGroup({
      'loginName': this.loginNameControl = new FormControl(),
      'password': this.passwordControl = new FormControl()
    });
    this.loginNameValue = this.loginNameControl.value;
    this.passwordValue = this.passwordControl.value;
  }

  placeholders = {
    loginName: 'Enter login name',
    password: 'Enter password'
  };

  ngOnInit() {
  }

}
