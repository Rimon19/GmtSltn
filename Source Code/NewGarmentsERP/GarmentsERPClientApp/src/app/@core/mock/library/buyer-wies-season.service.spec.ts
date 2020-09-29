import { TestBed } from '@angular/core/testing';

import { BuyerWiesSeasonService } from './buyer-wies-season.service';

describe('BuyerWiesSeasonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuyerWiesSeasonService = TestBed.get(BuyerWiesSeasonService);
    expect(service).toBeTruthy();
  });
});
