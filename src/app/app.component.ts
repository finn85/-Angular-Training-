import {Component} from '@angular/core';

import {CookieService} from 'ngx-cookie-service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent{

  linksIsHide!: boolean;
  curName!: string;

  constructor(
    private cookieService: CookieService,
    private userService: UserService
  ){}

  onActivate = (childComponent: any) => {

    this.linksIsHide = childComponent.linksIsHide;

    const currentId: string = this.cookieService.get('id');
    if (currentId) {
      this.userService.getUserById(currentId)
        .subscribe((data: any) => {
          this.curName = data.name;
        });
    } else {
      this.curName = '';
    }
  };

  changeLanguage = (lang: string): void => {
    this.userService.curLang = lang;
  }
}
//todo saveCookie with current language
//todo multilanguage
//todo clear comments
