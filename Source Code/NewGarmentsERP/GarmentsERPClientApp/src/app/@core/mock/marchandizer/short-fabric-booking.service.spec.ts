import { TestBed } from '@angular/core/testing';

import { ShortFabricBookingService } from './short-fabric-booking.service';

describe('ShortFabricBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShortFabricBookingService = TestBed.get(ShortFabricBookingService);
    expect(service).toBeTruthy();
  });
});
