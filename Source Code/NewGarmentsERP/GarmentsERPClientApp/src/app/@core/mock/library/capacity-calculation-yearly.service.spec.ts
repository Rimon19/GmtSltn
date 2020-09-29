import { TestBed } from '@angular/core/testing';

import { CapacityCalculationYearlyService } from './capacity-calculation-yearly.service';

describe('CapacityCalculationYearlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacityCalculationYearlyService = TestBed.get(CapacityCalculationYearlyService);
    expect(service).toBeTruthy();
  });
});
