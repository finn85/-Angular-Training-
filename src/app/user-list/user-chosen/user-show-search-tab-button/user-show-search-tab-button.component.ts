import { Component } from '@angular/core';
import { UserListStateService } from '../../user-list-state.service';
import { DataRetrievingService } from '../../data-retrieving.service';
import {SearchUsersService} from "../../search-users.service";

@Component({
  selector: 'app-user-show-search-tab-button',
  template:
    `<div class="button" (click)="showOrHideSearchTab(); data.getUsers()">
      <ng-template *ngIf="state.showUserListTab; then hide; else show"></ng-template>
      <ng-template #show> &#8744;</ng-template>
      <ng-template #hide> &#8743;</ng-template>
    </div>`,
  styleUrls: ['./user-show-search-tab-button.component.scss']
})

export class UserShowSearchTabButtonComponent {

  constructor(
    private state: UserListStateService,
    public data: DataRetrievingService,
    public search: SearchUsersService
  ) { }

  showOrHideSearchTab = () => {
    this.state.showUserListTab = !this.state.showUserListTab;
    this.state.findUser = false;
    this.search.nameForSearching = '';
    this.state.userNotFound = false;
  };
}

