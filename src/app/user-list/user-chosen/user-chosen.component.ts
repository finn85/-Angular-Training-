import { Component } from '@angular/core';

@Component({
  selector: 'app-user-chosen',
  template:
    `<app-user-short-info></app-user-short-info>
    <app-user-show-search-tab-button></app-user-show-search-tab-button>`,
  styleUrls: ['./user-chosen.component.scss']
})

export class UserChosenComponent { }
