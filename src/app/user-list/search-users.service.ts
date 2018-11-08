import { Injectable } from '@angular/core';
import { DataRetrievingService } from './data-retrieving.service';
import { User } from '../../../server/api';
import {UserListStateService} from "./user-list-state.service";

@Injectable()

export class SearchUsersService {

  nameForSearching: string = '';
  foundUsers: User[]|[] = [];

  constructor(
    public data: DataRetrievingService,
    public state: UserListStateService
  ) {}

  searchUsers = () => {
    if (this.nameForSearching !== '') {
      this.state.findUser = true;
      this.foundUsers = this.data.users.filter((item) => {
        return item.name === this.nameForSearching;
      });
      if (this.foundUsers.length === 0) {
        this.state.userNotFound = true;
      }
    }
  };

  getUser = (id: number) => {
    this.state.curUser = this.foundUsers[id];
  };
}
