import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../../server/api';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Injectable()

export class UserService {

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ){}

  checkUserLoginAndPassword = (formValues: object): any  => this.http.post(`/api/users/login`, formValues);

  getPassword = (formValues: object) => this.http.post('/api/users/password', formValues);

  getUserById = (id: string) => this.http.get(`/api/users/${id}`);

  changeInfo = (id: string, formValues: object) => this.http.put(`/api/users/${id}`, formValues);

  convertDateFromServer = (date: string): string => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return `${year}/${month}/${day}`;
  };

  convertDateToServer = (date: string) => {
    const year = +date.substring(0,4);
    const month = +date.substring(5,7) - 1;
    const day = +date.substring(8,10) + 1;

    return new Date(year, month, day).toISOString();
  };

  modifyUserDataFromServer = (user: User): User => {
    delete user.id;
    delete user.isAdmin;
    user.dateOfBirth = this.convertDateFromServer(user.dateOfBirth);
    user.dateOfLogin = this.convertDateFromServer(user.dateOfLogin);
    user.dateOfNotif = this.convertDateFromServer(user.dateOfNotif);

    return user;
  };

  modifyUserDataToServer = (user:User): User => {
    user.dateOfBirth = this.convertDateToServer(user.dateOfBirth);
    user.dateOfLogin = this.convertDateToServer(user.dateOfLogin);
    user.dateOfNotif = this.convertDateToServer(user.dateOfNotif);

    return user;
  };

  logOut = () => {
    this.cookie.delete('id');
    this.cookie.delete('admin');
    this.router.navigate(['/login'])
  };
}
