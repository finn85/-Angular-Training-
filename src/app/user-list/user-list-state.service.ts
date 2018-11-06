import { Injectable } from '@angular/core';

@Injectable()
export class UserListStateService {
  showUserListTab: boolean;
  userIsChosen: boolean;

  constructor(){
    this.showUserListTab = false;
    this.userIsChosen = true;
  }
}
