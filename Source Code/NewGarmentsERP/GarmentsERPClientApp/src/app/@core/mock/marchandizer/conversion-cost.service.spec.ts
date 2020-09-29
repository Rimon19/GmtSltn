import { TestBed } from '@angular/core/testing';

import { ConversionCostService } from './conversion-cost.service';

describe('ConversionCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConversionCostService = TestBed.get(ConversionCostService);
    expect(service).toBeTruthy();
  });
});
