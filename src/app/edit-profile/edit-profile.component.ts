import {Component, DoCheck, HostListener, OnInit} from '@angular/core';
import {FormControl, FormGroup, ValidationErrors} from "@angular/forms";
import {Router} from '@angular/router';

import {UserService} from "../user.service";
import {CookieService} from "ngx-cookie-service";
import {SpinnerService} from "../spinner.service";

import {asyncLoginNameValidator} from "../forms-validation/asyncLoginNameValidator";
import {asyncPasswordValidator} from "../forms-validation/asyncPasswordValidator";
import {asyncNameValidator} from "../forms-validation/asyncNameValidator";
import {asyncAgeValidator} from "../forms-validation/asyncAgeValidator";
import {asyncDateOfBirthValidator} from "../forms-validation/asyncDateOfBirthValidator";
import {asyncDateOfLoginValidator} from "../forms-validation/asyncDateOfLoginValidator";
import {asyncDateOfNotifValidator} from "../forms-validation/asyncDateOfNotifValidator";
import {selectErrMsg} from "../forms-validation/selectErrMsg";
import {allErrMsgs} from "../forms-validation/allErrMsgs";
import {User} from "../../../server/api";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements DoCheck, OnInit {

  linksIsHide: boolean = false;

  curUser!: User;

  userForm!: FormGroup;

  loginNameCtrl!: FormControl;
  passwordCtrl!: FormControl;
  nameCtrl!: FormControl;
  ageCtrl!: FormControl;
  dateOfBirthCtrl!: FormControl;
  dateOfLoginCtrl!: FormControl;
  dateOfNotifCtrl!: FormControl;

  constructor(
    private userService: UserService,
    private cookieService: CookieService,
    private spinnerService: SpinnerService,
    private router: Router
  ){}

  ngOnInit() {

    const currentId: string = this.cookieService.get('id');
    if (!currentId) {
      this.router.navigate(['/login'])
    } else {
      this.spinnerService.spinner.start();
      this.userService.getUserById(currentId)
        .subscribe((data: any) => {
          data = this.userService.modifyUserDataFromServer(data);
          this.curUser = data;
          this.userForm.setValue(this.curUser);
          this.spinnerService.spinner.stop();
        });
    }

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
      'info': new FormControl()
    });
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
    dateOfLogin: 'Format: YYYY/MM/DD',
    dateOfNotif: 'Format: YYYY/MM/DD',
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

  changeInfo = () => {
    const currentId: string = this.cookieService.get('id');
    const changedUser = this.userService.modifyUserDataToServer(this.userForm.value);
    this.userService.changeInfo(currentId, changedUser)
      .subscribe( () => {
        this.router.navigate(['/userProfile'])
      });
  };

  logOut = () => {
    this.cookieService.delete('id');
    this.router.navigate(['/login'])
  };

  getErrMsg = (controlName: string): void => {
    this.errMsgs[controlName] = selectErrMsg(this.userForm, controlName, allErrMsgs[controlName]);
  };

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.userForm.valid && !this.userForm.pending) {
      this.changeInfo();
    }
  }
}
