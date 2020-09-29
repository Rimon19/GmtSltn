import { TestBed } from '@angular/core/testing';

import { TNATaskPercentService } from './tnatask-percent.service';

describe('TNATaskPercentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TNATaskPercentService = TestBed.get(TNATaskPercentService);
    expect(service).toBeTruthy();
  });
});
