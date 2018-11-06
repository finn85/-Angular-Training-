import {Component} from '@angular/core';
import {UserListStateService} from "../../user-list-state.service";

@Component({
  selector: 'app-user-short-info',
  templateUrl: './user-short-info.component.html',
  styleUrls: ['./user-short-info.component.scss']
})
export class UserShortInfoComponent {

  constructor(public state: UserListStateService) { }

}
