import {Component} from '@angular/core';
import {UserListStateService} from './user-list-state.service';

@Component({
  selector: 'app-user-list',
  template:
    `<app-user-chosen></app-user-chosen>
    <app-user-dropdown-list *ngIf="state.showUserListTab"></app-user-dropdown-list>`,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  constructor(public state: UserListStateService) { }


}
