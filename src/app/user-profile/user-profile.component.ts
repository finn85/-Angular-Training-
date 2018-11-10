import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { SpinnerService } from '../spinner.service';
import { User } from '../../../server/api';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

  headerItemsIsHide: boolean = false;

  curUser: User = {
    loginName: '',
    password: '',
    name: '',
    age: '',
    dateOfBirth: '',
    dateOfLogin: '',
    dateOfNotif: '',
    info: ''
  };

  constructor(
    private user: UserService,
    private cookie: CookieService,
    private spinner: SpinnerService,
    private router: Router,
    public translate: TranslateService,
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
          this.spinner.stop();
      });
    }
   };
}
