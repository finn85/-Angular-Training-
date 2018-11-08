import { Injectable } from '@angular/core';
import {User} from "../../../server/api";

@Injectable()

export class UserListStateService {
  showUserListTab: boolean = false;
  userIsChosen: boolean = false;
  userNotFound: boolean = false;
  findUser: boolean = false;
  chosenUserIndex: number|null = null;
  curUser!: User;
}
