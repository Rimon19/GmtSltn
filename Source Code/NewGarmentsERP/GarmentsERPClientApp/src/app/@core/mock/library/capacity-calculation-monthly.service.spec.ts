import { TestBed } from '@angular/core/testing';

import { CapacityCalculationMonthlyService } from './capacity-calculation-monthly.service';

describe('CapacityCalculationMonthlyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacityCalculationMonthlyService = TestBed.get(CapacityCalculationMonthlyService);
    expect(service).toBeTruthy();
  });
});
