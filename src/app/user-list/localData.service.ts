import { Injectable } from '@angular/core';
import { User } from '../../../server/api';

@Injectable()

export class LocalDataService {

  data: User[] = [
    {
      id: 0,
      loginName: 'art',
      password: 'aaa',
      name: 'Artsiom',
      age: '33',
      dateOfBirth: '1985-09-20T13:03:10.008Z',
      dateOfLogin: '2015-09-20T13:03:10.008Z',
      dateOfNotif: '2020-10-20T13:03:10.008Z',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      id: 1,
      loginName: 'kate',
      password: '11111',
      name: 'Katrin',
      age: '29',
      dateOfBirth: '1985-09-20T13:03:10.008Z',
      dateOfLogin: '2015-09-20T13:03:10.008Z',
      dateOfNotif: '2020-10-20T13:03:10.008Z',
      info: 'Lorem ipsum dolor sit amet, consectetur . Ut enim ad minim veniam, qui'
    },
    {
      id: 2,
      loginName: 'pr',
      password: '11111',
      name: 'Petr',
      age: '33',
      dateOfBirth: '1985-09-20T13:03:10.008Z',
      dateOfLogin: '2015-09-20T13:03:10.008Z',
      dateOfNotif: '2020-10-20T13:03:10.008Z',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor iniint ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui'
    },
    {
      id: 3,
      loginName: 'fill',
      password: '11111',
      name: 'Fillip',
      age: '35',
      dateOfBirth: '1985-09-20T13:03:10.008Z',
      dateOfLogin: '2015-09-20T13:03:10.008Z',
      dateOfNotif: '2020-10-20T13:03:10.008Z',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor iniint ut labore et dolore magna aliqua. Ut enim ad minim veniam, qui',
    },
    {
      id: 4,
      loginName: 'artides',
      password: 'aaa',
      name: 'Artsiom',
      age: '43',
      dateOfBirth: '1985-09-20T13:03:10.008Z',
      dateOfLogin: '2015-09-20T13:03:10.008Z',
      dateOfNotif: '2020-10-20T13:03:10.008Z',
      info: 'Aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];
}
