import { TestBed } from '@angular/core/testing';

import { ServiceBookingForAOPV2Service } from './service-booking-for-aopv2.service';

describe('ServiceBookingForAOPV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForAOPV2Service = TestBed.get(ServiceBookingForAOPV2Service);
    expect(service).toBeTruthy();
  });
});
