import { Injectable } from '@angular/core';
interface User {
  login: string|null;
  password: string|null;
  name: string|null;
  age: string|null;
  dateOfBirth: string|null;
  dateOfLogin: string|null;
  dateOfNotif: string|null;
  information: string|null;
}

@Injectable(/*{
  providedIn: 'root'
}*/)
export class UserService {
  currentUser: User = {
    login: null,
    password: null,
    name: null,
    age: null,
    dateOfBirth: null,
    dateOfLogin: null,
    dateOfNotif: null,
    information: null
  }
}
