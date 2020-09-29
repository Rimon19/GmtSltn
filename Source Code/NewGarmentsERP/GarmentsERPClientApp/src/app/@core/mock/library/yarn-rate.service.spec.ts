import { TestBed } from '@angular/core/testing';

import { YarnRateService } from './yarn-rate.service';

describe('YarnRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnRateService = TestBed.get(YarnRateService);
    expect(service).toBeTruthy();
  });
});
