import { TestBed } from '@angular/core/testing';

import { OfferingCostInformationService } from './offering-cost-information.service';

describe('OfferingCostInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferingCostInformationService = TestBed.get(OfferingCostInformationService);
    expect(service).toBeTruthy();
  });
});
