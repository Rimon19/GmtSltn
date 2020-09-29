import { TestBed } from '@angular/core/testing';

import { ShortTrimsBookingService } from './short-trims-booking.service';

describe('ShortTrimsBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortTrimsBookingService = TestBed.get(ShortTrimsBookingService);
    expect(service).toBeTruthy();
  });
});
