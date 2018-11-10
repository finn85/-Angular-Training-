import { Component, DoCheck, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { SpinnerService } from '../spinner.service';
import { ValidationService } from '../validation.service';

import { asyncLoginNameValidator } from '../forms-validation/asyncLoginNameValidator';
import { asyncPasswordValidator } from '../forms-validation/asyncPasswordValidator';
import { asyncNameValidator } from '../forms-validation/asyncNameValidator';
import { asyncAgeValidator } from '../forms-validation/asyncAgeValidator';
import { asyncDateOfBirthValidator } from '../forms-validation/asyncDateOfBirthValidator';
import { asyncDateOfLoginValidator } from '../forms-validation/asyncDateOfLoginValidator';
import { asyncDateOfNotifValidator } from '../forms-validation/asyncDateOfNotifValidator';
import { User } from '../../../server/api';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})

export class EditProfileComponent implements DoCheck, OnInit {

  headerItemsIsHide: boolean = false;

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
    private user: UserService,
    private cookie: CookieService,
    private spinner: SpinnerService,
    private router: Router,
    private validation: ValidationService
  ){}

  ngOnInit() {
    const currentId: string = this.cookie.get('id');
    if (!currentId) {
      this.router.navigate(['/login'])
    } else {
      this.spinner.start();
      this.user.getUserById(currentId)
        .subscribe((data: any) => {
          data = this.user.modifyUserDataFromServer(data);
          this.curUser = data;
          this.userForm.setValue(this.curUser);
          this.spinner.stop();
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
  };

  ngDoCheck() {
    if (this.loginNameCtrl.invalid && this.loginNameCtrl.dirty) {
      this.validation.defineErr(this.loginNameCtrl);
    }
    if (this.passwordCtrl.invalid && this.passwordCtrl.dirty) {
      this.validation.defineErr(this.passwordCtrl);
    }
    if (this.nameCtrl.invalid && this.nameCtrl.dirty) {
      this.validation.defineErr(this.nameCtrl);
    }
    if (this.ageCtrl.invalid && this.ageCtrl.dirty) {
      this.validation.defineErr(this.ageCtrl);
    }
    if (this.dateOfBirthCtrl.invalid && this.dateOfBirthCtrl.dirty) {
      this.validation.defineErr(this.dateOfBirthCtrl);
    }
    if (this.dateOfLoginCtrl.invalid && this.dateOfLoginCtrl.dirty) {
      this.validation.defineErr(this.dateOfLoginCtrl);
    }
    if (this.dateOfNotifCtrl.invalid && this.dateOfNotifCtrl.dirty) {
      this.validation.defineErr(this.dateOfNotifCtrl);
    }
  };

  changeInfo = () => {
    const currentId: string = this.cookie.get('id');
    const changedUser = this.user.modifyUserDataToServer(this.userForm.value);
    this.user.changeInfo(currentId, changedUser)
      .subscribe( () => {
        this.router.navigate(['/userProfile'])
      });
  };

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.userForm.valid && !this.userForm.pending) {
      this.changeInfo();
    }
  };
}
