import { TestBed } from '@angular/core/testing';

import { YarnBrandInfoService } from './yarn-brand-info.service';

describe('YarnBrandInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnBrandInfoService = TestBed.get(YarnBrandInfoService);
    expect(service).toBeTruthy();
  });
});
