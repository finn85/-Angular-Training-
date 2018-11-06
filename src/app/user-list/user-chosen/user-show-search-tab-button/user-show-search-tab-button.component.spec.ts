import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {UserShowSearchTabButtonComponent} from "./user-show-search-tab-button.component";

describe('UserShowSearchTabButtonComponent', () => {
  let component: UserShowSearchTabButtonComponent;
  let fixture: ComponentFixture<UserShowSearchTabButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserShowSearchTabButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserShowSearchTabButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
