import { TestBed } from '@angular/core/testing';

import { TrimCostService } from './trim-cost.service';

describe('TrimCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrimCostService = TestBed.get(TrimCostService);
    expect(service).toBeTruthy();
  });
});
