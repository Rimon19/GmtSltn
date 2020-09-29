import { TestBed } from '@angular/core/testing';

import { YarnDyeingWOWithoutOrderDetailService } from './yarn-dyeing-wowithout-order-detail.service';

describe('YarnDyeingWOWithoutOrderDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnDyeingWOWithoutOrderDetailService = TestBed.get(YarnDyeingWOWithoutOrderDetailService);
    expect(service).toBeTruthy();
  });
});
