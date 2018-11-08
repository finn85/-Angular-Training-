import { Component } from '@angular/core';
import { SearchUsersService } from '../../../search-users.service';

@Component({
  selector: 'app-user-search-input',
  template:`<input type="text" class="input" [placeholder]="'main.userList.enterName' | translate" [(ngModel)]="searchService.nameForSearching">`,
  styleUrls: ['./user-search-input.component.scss']
})

export class UserSearchInputComponent {

  constructor(public searchService: SearchUsersService) {}
}
