import { TestBed } from '@angular/core/testing';

import { OtherCostService } from './other-cost.service';

describe('OtherCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherCostService = TestBed.get(OtherCostService);
    expect(service).toBeTruthy();
  });
});
