import { TestBed } from '@angular/core/testing';

import { CommercialCostService } from './commercial-cost.service';

describe('CommercialCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommercialCostService = TestBed.get(CommercialCostService);
    expect(service).toBeTruthy();
  });
});
