import { TestBed } from '@angular/core/testing';

import { WashCostService } from './wash-cost.service';

describe('WashCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WashCostService = TestBed.get(WashCostService);
    expect(service).toBeTruthy();
  });
});
