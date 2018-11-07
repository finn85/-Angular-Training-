import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../../../../../server/api";
import {DataRetrievingService} from "../../../data-retrieving.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user!: User;

  constructor(public dataRetrieving: DataRetrievingService) { }

  ngOnInit() {
  }

}
