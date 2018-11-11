import {Component, Input} from '@angular/core';
import {User} from "../../../server/api";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})

export class UserItemComponent {
  @Input() user!: User;

  convertDate = (date: string): string => {
    const year = date.substring(0, 4);
    const month = date.substring(5, 7);
    const day = date.substring(8, 10);

    return `${year}/${month}/${day}`;
  };
}
