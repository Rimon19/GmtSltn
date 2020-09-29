import { TestBed } from '@angular/core/testing';

import { CommissionCostService } from './commission-cost.service';

describe('CommissionCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommissionCostService = TestBed.get(CommissionCostService);
    expect(service).toBeTruthy();
  });
});
