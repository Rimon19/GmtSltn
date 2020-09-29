import { TestBed } from '@angular/core/testing';

import { SampleFabricBookingService } from './sample-fabric-booking.service';

describe('SampleFabricBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleFabricBookingService = TestBed.get(SampleFabricBookingService);
    expect(service).toBeTruthy();
  });
});
