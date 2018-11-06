import { TestBed } from '@angular/core/testing';

import { UserListStateService } from './user-list-state.service';

describe('UserListStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserListStateService = TestBed.get(UserListStateService);
    expect(service).toBeTruthy();
  });
});
