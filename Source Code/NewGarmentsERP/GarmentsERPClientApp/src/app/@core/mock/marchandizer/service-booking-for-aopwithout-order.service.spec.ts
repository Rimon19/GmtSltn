import { TestBed } from '@angular/core/testing';

import { ServiceBookingForAOPWithoutOrderService } from './service-booking-for-aopwithout-order.service';

describe('ServiceBookingForAOPWithoutOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForAOPWithoutOrderService = TestBed.get(ServiceBookingForAOPWithoutOrderService);
    expect(service).toBeTruthy();
  });
});
