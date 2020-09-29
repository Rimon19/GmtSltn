import { TestBed } from '@angular/core/testing';

import { OfferingCostBuyerInformationService } from './offering-cost-buyer-information.service';

describe('OfferingCostBuyerInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferingCostBuyerInformationService = TestBed.get(OfferingCostBuyerInformationService);
    expect(service).toBeTruthy();
  });
});
