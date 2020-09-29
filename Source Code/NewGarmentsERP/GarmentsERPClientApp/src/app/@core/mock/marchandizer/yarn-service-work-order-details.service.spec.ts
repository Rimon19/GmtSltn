import { TestBed } from '@angular/core/testing';

import { YarnServiceWorkOrderDetailsService } from './yarn-service-work-order-details.service';

describe('YarnServiceWorkOrderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnServiceWorkOrderDetailsService = TestBed.get(YarnServiceWorkOrderDetailsService);
    expect(service).toBeTruthy();
  });
});
