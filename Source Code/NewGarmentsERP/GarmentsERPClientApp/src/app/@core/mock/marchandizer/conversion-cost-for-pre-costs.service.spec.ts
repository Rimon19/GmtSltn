import { TestBed } from '@angular/core/testing';

import { ConversionCostForPreCostsService } from './conversion-cost-for-pre-costs.service';

describe('ConversionCostForPreCostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversionCostForPreCostsService = TestBed.get(ConversionCostForPreCostsService);
    expect(service).toBeTruthy();
  });
});
