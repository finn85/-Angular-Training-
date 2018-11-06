import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {UserListStateService} from "./user-list-state.service";

import {UserListComponent} from "./user-list.component";
import {UserChosenComponent} from './user-chosen/user-chosen.component';
import {UserShortInfoComponent} from './user-chosen/user-short-info/user-short-info.component';
import {UserShowSearchTabButtonComponent} from './user-chosen/user-show-search-tab-button/user-show-search-tab-button.component';
import {UserDropdownListComponent} from './user-dropdown-list/user-dropdown-list.component';
import {UserSearchTabComponent} from './user-dropdown-list/user-search-tab/user-search-tab.component';
import {UserSearchInputComponent} from './user-dropdown-list/user-search-tab/user-search-input/user-search-input.component';
import {UserSearchButtonComponent} from './user-dropdown-list/user-search-tab/user-search-button/user-search-button.component';
import {UsersTabComponent} from './user-dropdown-list/users-tab/users-tab.component';

@NgModule({
  declarations: [
    UserListComponent,
    UserChosenComponent,
    UserShortInfoComponent,
    UserShowSearchTabButtonComponent,
    UserDropdownListComponent,
    UserSearchTabComponent,
    UserSearchInputComponent,
    UserSearchButtonComponent,
    UsersTabComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserListStateService
  ]
})
export class UserListModule { }
