import { TestBed } from '@angular/core/testing';

import { YarnCountsService } from './yarn-counts.service';

describe('YarnCountsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnCountsService = TestBed.get(YarnCountsService);
    expect(service).toBeTruthy();
  });
});
