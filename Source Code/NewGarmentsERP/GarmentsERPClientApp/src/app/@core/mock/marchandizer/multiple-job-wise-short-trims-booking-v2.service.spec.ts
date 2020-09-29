import { TestBed } from '@angular/core/testing';

import { MultipleJobWiseShortTrimsBookingV2Service } from './multiple-job-wise-short-trims-booking-v2.service';

describe('MultipleJobWiseShortTrimsBookingV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleJobWiseShortTrimsBookingV2Service = TestBed.get(MultipleJobWiseShortTrimsBookingV2Service);
    expect(service).toBeTruthy();
  });
});
