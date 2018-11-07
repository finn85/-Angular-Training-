import {Component} from '@angular/core';
import {DataRetrievingService} from "../../data-retrieving.service";
import {UserListStateService} from "../../user-list-state.service";

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.scss']
})

export class UsersTabComponent {

  constructor(
    public data: DataRetrievingService,
    private state: UserListStateService
  ) {}

  chooseUser = (index: number) => {
    this.state.userIsChosen = true;
    this.data.getUser(index);
  }
}
