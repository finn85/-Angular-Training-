import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LocalDataService } from './localData.service';
import  {UserListStateService} from './user-list-state.service';
import { User } from '../../../server/api';

@Injectable()

export class DataRetrievingService {
// 'server' from server or 'local' from LocalDataService
  dataSource: string = 'local';

  users!: User[];
  curUser!: User;

  constructor (
    private state: UserListStateService,
    private dataService: LocalDataService,
    private http: HttpClient
  ) {
    this.getUsers();
  }

  getUsers = (): void => {
    switch (this.dataSource) {
      case 'local':
        this.users = this.dataService.data;
        break;
      case 'server': {
        this.http.get('/api/users/')
          .subscribe((data: any) => {
            this.users = data;
          });
        break;
      }
    }
  };

  getUser = (id: number) => {
    this.state.curUser = this.users[id];
  };
}
