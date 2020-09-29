import { TestBed } from '@angular/core/testing';

import { ServiceBookingForKnitingDetailService } from './service-booking-for-kniting-detail.service';

describe('ServiceBookingForKnitingDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForKnitingDetailService = TestBed.get(ServiceBookingForKnitingDetailService);
    expect(service).toBeTruthy();
  });
});
