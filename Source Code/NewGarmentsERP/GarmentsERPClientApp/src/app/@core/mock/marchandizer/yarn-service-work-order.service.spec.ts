import { TestBed } from '@angular/core/testing';

import { YarnServiceWorkOrderService } from './yarn-service-work-order.service';

describe('YarnServiceWorkOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnServiceWorkOrderService = TestBed.get(YarnServiceWorkOrderService);
    expect(service).toBeTruthy();
  });
});
