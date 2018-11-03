import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {UserService} from "../user.service";
import {CookieService} from "ngx-cookie-service";
import {SpinnerService} from "../spinner.service";
import {User} from "../../../server/api";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})

export class UserProfileComponent implements OnInit {

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
          this.spinnerService.spinner.stop();
      });
    }
   }

  logOut = () => {
    this.cookieService.delete('id');
    this.router.navigate(['/login'])
  };
}
