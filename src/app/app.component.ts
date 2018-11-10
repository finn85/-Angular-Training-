import {Component, OnInit} from '@angular/core';

import {TranslateService} from '@ngx-translate/core';
import {CookieService} from 'ngx-cookie-service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  headerItemsIsHide!: boolean;
  curName!: string;

  constructor(
    private cookie: CookieService,
    private user: UserService,
    public translate: TranslateService,
  ){}

  ngOnInit(){
    this.translate.setDefaultLang('en');
  };

  onActivate = (childComponent: any) => {
    this.headerItemsIsHide = childComponent.headerItemsIsHide;

    const currentId: string = this.cookie.get('id');
    if (currentId) {
      this.user.getUserById(currentId)
        .subscribe((data: any) => {
          this.curName = data.name;
        });
    } else {
      this.curName = '';
    }
  };

  changeLanguage = (lang: string): void => {
    this.translate.use(lang);
    this.cookie.set('lang',lang, 30)
  };
}
