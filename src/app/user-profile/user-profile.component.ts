import {Component, DoCheck, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

import {UserService} from '../user.service';
import {CookieService} from 'ngx-cookie-service';
import {SpinnerService} from '../spinner.service';
import {User} from '../../../server/api';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit, DoCheck {

  linksIsHide: boolean = false;

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
    private userService: UserService,
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
      this.userService.getUserById(currentId)
        .subscribe((data: any) => {
          data = this.userService.modifyUserDataFromServer(data);
          this.curUser = data;
          this.spinner.stop();
      });
    }
   };

   ngDoCheck() {
     this.translate.use(this.cookie.get('lang'));
   };

  logOut = () => {
    this.cookie.delete('id');
    this.router.navigate(['/login'])
  };
}
