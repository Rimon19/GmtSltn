import { TestBed } from '@angular/core/testing';

import { OfferingCostFabricInformationService } from './offering-cost-fabric-information.service';

describe('OfferingCostFabricInformationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfferingCostFabricInformationService = TestBed.get(OfferingCostFabricInformationService);
    expect(service).toBeTruthy();
  });
});
