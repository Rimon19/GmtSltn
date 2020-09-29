import { TestBed } from '@angular/core/testing';

import { ShortFabricBookingDetailsService } from './short-fabric-booking-details.service';

describe('ShortFabricBookingDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortFabricBookingDetailsService = TestBed.get(ShortFabricBookingDetailsService);
    expect(service).toBeTruthy();
  });
});
