import { TestBed } from '@angular/core/testing';

import { ServiceBookingForAOPWithoutOrderDetailsService } from './service-booking-for-aopwithout-order-details.service';

describe('ServiceBookingForAOPWithoutOrderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForAOPWithoutOrderDetailsService = TestBed.get(ServiceBookingForAOPWithoutOrderDetailsService);
    expect(service).toBeTruthy();
  });
});
