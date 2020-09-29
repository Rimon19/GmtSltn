import { TestBed } from '@angular/core/testing';

import { TrimCostsService } from './trim-costs.service';

describe('TrimCostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrimCostsService = TestBed.get(TrimCostsService);
    expect(service).toBeTruthy();
  });
});
