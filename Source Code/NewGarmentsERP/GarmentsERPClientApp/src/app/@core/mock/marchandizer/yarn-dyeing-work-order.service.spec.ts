import { TestBed } from '@angular/core/testing';

import { YarnDyeingWorkOrderService } from './yarn-dyeing-work-order.service';

describe('YarnDyeingWorkOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnDyeingWorkOrderService = TestBed.get(YarnDyeingWorkOrderService);
    expect(service).toBeTruthy();
  });
});
