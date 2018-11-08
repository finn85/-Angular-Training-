import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-search-input',
  template:`<div class="input" contenteditable="true">Enter a name of user</div>`,
  styleUrls: ['./user-search-input.component.css']
})
export class UserSearchInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
