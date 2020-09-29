import { TestBed } from '@angular/core/testing';

import { OrderOrJobNoService } from './order-or-job-no.service';

describe('OrderOrJobNoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderOrJobNoService = TestBed.get(OrderOrJobNoService);
    expect(service).toBeTruthy();
  });
});
