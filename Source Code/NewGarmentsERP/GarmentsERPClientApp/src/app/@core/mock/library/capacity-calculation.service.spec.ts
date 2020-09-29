import { TestBed } from '@angular/core/testing';

import { CapacityCalculationService } from './capacity-calculation.service';

describe('CapacityCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacityCalculationService = TestBed.get(CapacityCalculationService);
    expect(service).toBeTruthy();
  });
});
