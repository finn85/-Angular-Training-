import { TestBed } from '@angular/core/testing';

import { DataRetrievingService } from './data-retrieving.service';

describe('DataRetrievingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataRetrievingService = TestBed.get(DataRetrievingService);
    expect(service).toBeTruthy();
  });
});
