import { TestBed } from '@angular/core/testing';

import { EmbelishmentCostService } from './embelishment-cost.service';

describe('EmbelishmentCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbelishmentCostService = TestBed.get(EmbelishmentCostService);
    expect(service).toBeTruthy();
  });
});
