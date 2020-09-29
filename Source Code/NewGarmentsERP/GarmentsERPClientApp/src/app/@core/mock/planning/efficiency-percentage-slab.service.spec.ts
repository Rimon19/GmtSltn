import { TestBed } from '@angular/core/testing';

import { EfficiencyPercentageSlabService } from './efficiency-percentage-slab.service';

describe('EfficiencyPercentageSlabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EfficiencyPercentageSlabService = TestBed.get(EfficiencyPercentageSlabService);
    expect(service).toBeTruthy();
  });
});
