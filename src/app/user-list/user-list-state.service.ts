import { Injectable } from '@angular/core';

@Injectable()

export class UserListStateService {
  showUserListTab: boolean = false;
  userIsChosen: boolean = false;
  chosenUserIndex: number|null = null;
}
