import {Component, DoCheck, OnInit} from '@angular/core';

import {TranslateService} from "@ngx-translate/core";
import {CookieService} from 'ngx-cookie-service';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl:`./app.component.html`,
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, DoCheck {

  linksIsHide!: boolean;
  curName!: string;

  constructor(
    private cookie: CookieService,
    private userService: UserService,
    public translate: TranslateService,
  ){}

  ngOnInit(){
    this.translate.setDefaultLang('en');
  }

  ngDoCheck(){
    this.translate.use(this.cookie.get('lang'));
  }

  onActivate = (childComponent: any) => {
    this.linksIsHide = childComponent.linksIsHide;

    const currentId: string = this.cookie.get('id');
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
    this.cookie.set('lang',lang, 30)
  }
}
//todo clear comments
