import { Component } from '@angular/core';
import { SearchUsersService } from '../../../search-users.service';

@Component({
  selector: 'app-user-search-button',
  templateUrl: './user-search-button.component.html',
  styleUrls: ['./user-search-button.component.scss']
})
export class UserSearchButtonComponent {
  constructor(public searchService: SearchUsersService) { }
}
