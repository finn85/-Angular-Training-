import { Component } from '@angular/core';

@Component({
  selector: 'app-user-search-tab',
  template:
    `<app-user-search-input></app-user-search-input>
    <app-user-search-button></app-user-search-button>`,
  styleUrls: ['./user-search-tab.component.scss']
})

export class UserSearchTabComponent { }
