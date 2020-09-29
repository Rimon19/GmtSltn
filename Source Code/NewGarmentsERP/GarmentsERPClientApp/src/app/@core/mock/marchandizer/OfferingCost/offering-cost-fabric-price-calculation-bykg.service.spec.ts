import { TestBed } from '@angular/core/testing';

import { OfferingCostFabricPriceCalculationBykgService } from './offering-cost-fabric-price-calculation-bykg.service';

describe('OfferingCostFabricPriceCalculationBykgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferingCostFabricPriceCalculationBykgService = TestBed.get(OfferingCostFabricPriceCalculationBykgService);
    expect(service).toBeTruthy();
  });
});
