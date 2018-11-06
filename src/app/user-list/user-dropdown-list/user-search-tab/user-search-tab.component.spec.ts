import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchTabComponent } from './user-search-tab.component';

describe('UserSearchTabComponent', () => {
  let component: UserSearchTabComponent;
  let fixture: ComponentFixture<UserSearchTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSearchTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSearchTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
