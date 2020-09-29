import { TestBed } from '@angular/core/testing';

import { MultiJobWiseServiceBookingKnittingService } from './multi-job-wise-service-booking-knitting.service';

describe('MultiJobWiseServiceBookingKnittingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiJobWiseServiceBookingKnittingService = TestBed.get(MultiJobWiseServiceBookingKnittingService);
    expect(service).toBeTruthy();
  });
});
