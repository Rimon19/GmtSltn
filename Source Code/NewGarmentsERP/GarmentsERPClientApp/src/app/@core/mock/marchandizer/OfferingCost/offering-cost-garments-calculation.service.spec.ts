import { TestBed } from '@angular/core/testing';

import { OfferingCostGarmentsCalculationService } from './offering-cost-garments-calculation.service';

describe('OfferingCostGarmentsCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferingCostGarmentsCalculationService = TestBed.get(OfferingCostGarmentsCalculationService);
    expect(service).toBeTruthy();
  });
});
