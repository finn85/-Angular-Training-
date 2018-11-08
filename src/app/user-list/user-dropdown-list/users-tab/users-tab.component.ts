import {Component} from '@angular/core';
import {DataRetrievingService} from "../../data-retrieving.service";
import {UserListStateService} from "../../user-list-state.service";
import {SearchUsersService} from "../../search-users.service";

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.scss']
})

export class UsersTabComponent {

  constructor(
    public data: DataRetrievingService,
    private state: UserListStateService,
    public search: SearchUsersService
  ) {}

  chooseUser = (index: number) => {
    this.state.userIsChosen = true;
    if (this.state.findUser) {
      this.search.getUser(index);
    } else {
      this.data.getUser(index);
    }
  }
}
