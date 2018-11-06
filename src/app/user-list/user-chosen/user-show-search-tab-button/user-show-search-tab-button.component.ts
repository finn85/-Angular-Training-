import {Component} from '@angular/core';
import {UserListStateService} from "../../user-list-state.service";

@Component({
  selector: 'app-user-show-search-tab-button',
  template:
    `<div class="button" (click)="showOrHideSearchTab()">
      <ng-template *ngIf="state.showUserListTab; then hide; else show"></ng-template>
      <ng-template #show> &#8744;</ng-template>
      <ng-template #hide> &#8743;</ng-template>
    </div>`,
  styleUrls: ['./user-show-search-tab-button.component.scss']
})
export class UserShowSearchTabButtonComponent {

  constructor(private state: UserListStateService) { }


  showOrHideSearchTab = () => {
    this.state.showUserListTab = !this.state.showUserListTab;
  }
}

