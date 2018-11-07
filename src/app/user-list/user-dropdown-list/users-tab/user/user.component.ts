import {Component, Input} from '@angular/core';
import {User} from "../../../../../../server/api";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent {
  @Input() user!: User;

  convertDate = (date: string): string => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return `${year}/${month}/${day}`;
  };
}
