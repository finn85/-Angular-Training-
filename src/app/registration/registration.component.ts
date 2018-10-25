import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  loginNameCtrl: FormControl;
  passwordCtrl: FormControl;
  ctrlQuestionCtrl: FormControl;
  ctrlAnswerCtrl: FormControl;
  nameCtrl: FormControl;
  ageCtrl:FormControl;
  dateOfBirthCtrl: FormControl;
  dateOfLoginCtrl: FormControl;
  dateOfNotifCtrl: FormControl;

  loginNameVal: string;
  passwordVal: string;

  constructor(){
    this.registrationForm = new FormGroup({
      'loginName': this.loginNameCtrl = new FormControl(),
      'password': this.passwordCtrl = new FormControl(),
      'ctrlQuestion': this.ctrlQuestionCtrl = new FormControl(),
      'ctrlAnswer': this.ctrlAnswerCtrl = new FormControl(),
      'name': this.nameCtrl = new FormControl(),
      'age': this.ageCtrl = new FormControl(),
      'dateOfBirth': this.dateOfBirthCtrl = new FormControl(),
      'dateOfLogin': this.dateOfLoginCtrl = new FormControl(),
      'dateOfNotif': this.dateOfNotifCtrl = new FormControl()
    });
    this.loginNameVal = this.loginNameCtrl.value;
    this.passwordVal = this.passwordCtrl.value;
  }

  placeholders = {
    loginName: 'One word (numbers and letters)',
    password: 'One word (numbers and letters)',
    ctrlQuestion: 'Come up with a control question',
    ctrlAnswer: 'One word (only letters)',
    name: 'One or two words (only letters)',
    age: 'From 18 till 65',
    dateOfBirth: 'Format: YYYY/MM/DD',
    dateOfLogin: 'Format: DD MMMM YYYY',
    dateOfNotif: 'Format: DD-MMM-YY'
  };

  ngOnInit() {
  }
}
