import { TestBed } from '@angular/core/testing';

import { KnittingChargeService } from './knitting-charge.service';

describe('KnittingChargeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnittingChargeService = TestBed.get(KnittingChargeService);
    expect(service).toBeTruthy();
  });
});
