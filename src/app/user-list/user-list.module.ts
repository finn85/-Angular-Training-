import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from '@angular/forms';

import { UserListStateService } from './user-list-state.service';
import { DataRetrievingService } from './data-retrieving.service';
import { SearchUsersService } from "./search-users.service";
import { LocalDataService } from './localData.service';

import { UserListComponent } from './user-list.component';
import { UserChosenComponent } from './user-chosen/user-chosen.component';
import { UserShortInfoComponent } from './user-chosen/user-short-info/user-short-info.component';
import { UserShowSearchTabButtonComponent } from './user-chosen/user-show-search-tab-button/user-show-search-tab-button.component';
import { UserDropdownListComponent } from './user-dropdown-list/user-dropdown-list.component';
import { UserSearchTabComponent } from './user-dropdown-list/user-search-tab/user-search-tab.component';
import { UserSearchInputComponent } from './user-dropdown-list/user-search-tab/user-search-input/user-search-input.component';
import { UserSearchButtonComponent } from './user-dropdown-list/user-search-tab/user-search-button/user-search-button.component';
import { UsersTabComponent } from './user-dropdown-list/users-tab/users-tab.component';
import { UserComponent } from './user-dropdown-list/users-tab/user/user.component';

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
    UsersTabComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    TranslateModule,
    FormsModule
  ],
  exports: [
    UserListComponent
  ],
  providers: [
    UserListStateService,
    DataRetrievingService,
    LocalDataService,
    SearchUsersService
  ]
})

export class UserListModule { }
