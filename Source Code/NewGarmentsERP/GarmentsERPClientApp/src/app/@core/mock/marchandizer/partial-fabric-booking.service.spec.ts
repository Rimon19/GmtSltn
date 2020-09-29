import { TestBed } from '@angular/core/testing';

import { PartialFabricBookingService } from './partial-fabric-booking.service';

describe('PartialFabricBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartialFabricBookingService = TestBed.get(PartialFabricBookingService);
    expect(service).toBeTruthy();
  });
});
