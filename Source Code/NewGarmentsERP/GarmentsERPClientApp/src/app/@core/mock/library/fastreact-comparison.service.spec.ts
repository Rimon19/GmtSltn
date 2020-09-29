import { TestBed } from '@angular/core/testing';

import { FastreactComparisonService } from './fastreact-comparison.service';

describe('FastreactComparisonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FastreactComparisonService = TestBed.get(FastreactComparisonService);
    expect(service).toBeTruthy();
  });
});
