import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {LocalDataService} from "./localData.service";
import {User} from "../../../server/api";

@Injectable()

export class DataRetrievingService {

  dataSource: string = 'server'; // or 'local' from LocalDataService

  users!: User[];
  curUser!: User;

  constructor (
    private dataService: LocalDataService,
    private http: HttpClient
  ) {
    this.getUsers();
  }

  getUsers = (): void => { //todo rename to getUsers
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
    this.curUser = this.users[id];
  };
}
