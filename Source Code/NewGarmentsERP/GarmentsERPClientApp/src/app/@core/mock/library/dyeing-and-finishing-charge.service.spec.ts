import { TestBed } from '@angular/core/testing';

import { DyeingAndFinishingChargeService } from './dyeing-and-finishing-charge.service';

describe('DyeingAndFinishingChargeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DyeingAndFinishingChargeService = TestBed.get(DyeingAndFinishingChargeService);
    expect(service).toBeTruthy();
  });
});
