import {Component, DoCheck, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {asyncLoginNameValidator} from "../formsValidation/asyncLoginNameValidator";
import {asyncPasswordValidator} from "../formsValidation/asyncPasswordValidator";
import {asyncNameValidator} from "../formsValidation/asyncNameValidator";
import {asyncAgeValidator} from "../formsValidation/asyncAgeValidator";
import {asyncDateOfBirthValidator} from "../formsValidation/asyncDateOfBirthValidator";
import {asyncDateOfLoginValidator} from "../formsValidation/asyncDateOfLoginValidator";
import {asyncDateOfNotifValidator} from "../formsValidation/asyncDateOfNotifValidator";
import {selectErrMsg} from "../formsValidation/selectErrMsg";
import {allErrMsgs} from "../formsValidation/allErrMsgs";
import {UserService} from "../user.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent implements DoCheck, OnInit {

  userForm!: FormGroup;

  loginNameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  nameCtrl!: FormControl;
  ageCtrl!: FormControl;
  dateOfBirthCtrl!: FormControl;
  dateOfLoginCtrl!: FormControl;
  dateOfNotifCtrl!: FormControl;
  infoCtrl!: FormControl;

  constructor(private userService: UserService, private  cookieService: CookieService){}

  ngOnInit() {
    const curentId: string = this.cookieService.get('id');
    console.log(curentId);
    // this.userService.getUserById(curentId)
    //   .subscribe(data => {
    //     console.log(data);
    //   });
    this.userService.getUserById(curentId).pipe(map((data:any) => {
      console.log(data);
      return data.toString();
    }));


    this.userForm = new FormGroup({
      'loginName': this.loginNameCtrl = new FormControl(null,[],[
        asyncLoginNameValidator
      ]),
      'password': this.passwordCtrl = new FormControl(null,[],[
        asyncPasswordValidator
      ]),
      'name': this.nameCtrl = new FormControl(null,[],[
        asyncNameValidator
      ]),
      'age': this.ageCtrl = new FormControl(null,[],[
        asyncAgeValidator
      ]),
      'dateOfBirth': this.dateOfBirthCtrl = new FormControl(null,[],[
        asyncDateOfBirthValidator
      ]),
      'dateOfLogin': this.dateOfLoginCtrl = new FormControl(null,[],[
        asyncDateOfLoginValidator
      ]),
      'dateOfNotif': this.dateOfNotifCtrl = new FormControl(null,[],[
        asyncDateOfNotifValidator
      ]),
      'info': this.infoCtrl = new FormControl()
    })
  }

  ngDoCheck() {
    if (!this.loginNameCtrl.pending && this.loginNameCtrl.dirty) {
      this.getErrMsg('loginName');
    }
    if (!this.passwordCtrl.pending && this.passwordCtrl.dirty) {
      this.getErrMsg('password');
    }
    if (!this.nameCtrl.pending && this.nameCtrl.dirty) {
      this.getErrMsg('name');
    }
    if (!this.ageCtrl.pending && this.ageCtrl.dirty) {
      this.getErrMsg('age');
    }
    if (!this.dateOfBirthCtrl.pending && this.dateOfBirthCtrl.dirty) {
      this.getErrMsg('dateOfBirth');
    }
    if (!this.dateOfLoginCtrl.pending && this.dateOfLoginCtrl.dirty) {
      this.getErrMsg('dateOfLogin');
    }
    if (!this.dateOfNotifCtrl.pending && this.dateOfNotifCtrl.dirty) {
      this.getErrMsg('dateOfNotif');
    }
  }


  placeholders = {
    loginName: 'One word (numbers and letters)',
    password: 'One word (numbers and letters)',
    name: 'One or two words (only letters)',
    age: 'From 18 till 65',
    dateOfBirth: 'Format: YYYY/MM/DD',
    dateOfLogin: 'Format: DD MMMM YYYY',
    dateOfNotif: 'Format: DD-MMM-YY',
    info: 'Information about you'
  };

  errMsgs: ValidationErrors = {
    loginName: null,
    password: null,
    name: null,
    age: null,
    dateOfBirth: null,
    dateOfLogin: null,
    dateOfNotif: null
  };

  logOut = () => {
    this.cookieService.delete('id')
  };

  getErrMsg = (controlName: string): void => {
    this.errMsgs[controlName] = selectErrMsg(this.userForm, controlName, allErrMsgs[controlName]);
  };
}
