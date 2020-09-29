import { TestBed } from '@angular/core/testing';

import { YarnDyeingWOWithoutOrderMasterService } from './yarn-dyeing-wowithout-order-master.service';

describe('YarnDyeingWOWithoutOrderMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnDyeingWOWithoutOrderMasterService = TestBed.get(YarnDyeingWOWithoutOrderMasterService);
    expect(service).toBeTruthy();
  });
});
