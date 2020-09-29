import { TestBed } from '@angular/core/testing';

import { OfferingCostConsumptionCostService } from './offering-cost-consumption-cost.service';

describe('OfferingCostConsumptionCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferingCostConsumptionCostService = TestBed.get(OfferingCostConsumptionCostService);
    expect(service).toBeTruthy();
  });
});
