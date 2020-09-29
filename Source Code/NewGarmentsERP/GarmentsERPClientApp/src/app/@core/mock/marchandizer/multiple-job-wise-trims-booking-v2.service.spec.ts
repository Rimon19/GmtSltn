import { TestBed } from '@angular/core/testing';

import { MultipleJobWiseTrimsBookingV2Service } from './multiple-job-wise-trims-booking-v2.service';

describe('MultipleJobWiseTrimsBookingV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleJobWiseTrimsBookingV2Service = TestBed.get(MultipleJobWiseTrimsBookingV2Service);
    expect(service).toBeTruthy();
  });
});
