import { Injectable } from '@angular/core';

@Injectable()

export class UserListStateService {
  showUserListTab: boolean = true;
  userIsChosen: boolean = false;
  userNotFound: boolean = false;
  chosenUserIndex: number|null = null;
}
