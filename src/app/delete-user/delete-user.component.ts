import { Component, OnInit } from '@angular/core';
import { User } from '../../../server/api';

import { SpinnerService } from '../spinner.service';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss']
})
export class DeleteUserComponent implements OnInit {

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
  curUserId?: number;
  curUsers!: User[];

  constructor(
    private user: UserService,
    private spinner: SpinnerService,
    private cookie: CookieService
  ){}

  ngOnInit() {
    this.spinner.start();
    this.user.getUsers()
      .subscribe((data: any) => {
        this.curUsers = data;
        this.spinner.stop()
      });
  };

  chooseUser = (index: number): void => {
    this.curUserId = this.curUsers[index].id;
    this.curUser = Object.assign({}, this.curUsers[index]);
    this.user.modifyUserDataFromServer(this.curUser);
  };

  deleteUser = () => {
    if (String(this.curUserId) === this.cookie.get('id')) {
      alert('You can not delete your profile');
      return;
    }
    this.spinner.start();
    const curId: string = String(this.curUserId);
    this.user.deleteUser(curId)
      .subscribe( () => {
        this.curUser.loginName = '';
        this.curUser.password = '';
        this.curUser.name = '';
        this.curUser.age = '';
        this.curUser.dateOfBirth = '';
        this.curUser.dateOfLogin = '';
        this.curUser.dateOfNotif = '';
        this.curUser.info = '';

        this.spinner.stop();
        this.ngOnInit();
    });
  };
}
