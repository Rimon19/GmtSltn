import { TestBed } from '@angular/core/testing';

import { ServiceBookingForKnittingService } from './service-booking-for-knitting.service';

describe('ServiceBookingForKnittingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForKnittingService = TestBed.get(ServiceBookingForKnittingService);
    expect(service).toBeTruthy();
  });
});
