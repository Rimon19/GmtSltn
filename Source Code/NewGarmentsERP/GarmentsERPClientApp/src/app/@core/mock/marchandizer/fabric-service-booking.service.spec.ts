import { TestBed } from '@angular/core/testing';

import { FabricServiceBookingService } from './fabric-service-booking.service';

describe('FabricServiceBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricServiceBookingService = TestBed.get(FabricServiceBookingService);
    expect(service).toBeTruthy();
  });
});
