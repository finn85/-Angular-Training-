import { Component } from '@angular/core';

@Component({
  selector: 'app-user-dropdown-list',
  template:
    `<app-user-search-tab></app-user-search-tab>
    <app-users-tab></app-users-tab>`,
  styleUrls: ['./user-dropdown-list.component.scss']
})

export class UserDropdownListComponent { }
