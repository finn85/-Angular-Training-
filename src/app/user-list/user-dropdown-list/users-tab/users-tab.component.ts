import { Component, OnInit } from '@angular/core';
import { DataService} from "../../data.service";

@Component({
  selector: 'app-users-tab',
  templateUrl: './users-tab.component.html',
  styleUrls: ['./users-tab.component.css']
})
export class UsersTabComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
