import { TestBed } from '@angular/core/testing';

import { ProfitCenterService } from './profit-center.service';

describe('ProfitCenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfitCenterService = TestBed.get(ProfitCenterService);
    expect(service).toBeTruthy();
  });
});
