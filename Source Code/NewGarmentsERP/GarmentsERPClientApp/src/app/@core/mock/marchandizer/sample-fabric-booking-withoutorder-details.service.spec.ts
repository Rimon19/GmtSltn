import { TestBed } from '@angular/core/testing';

import { SampleFabricBookingWithoutorderDetailsService } from './sample-fabric-booking-withoutorder-details.service';

describe('SampleFabricBookingWithoutorderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleFabricBookingWithoutorderDetailsService = TestBed.get(SampleFabricBookingWithoutorderDetailsService);
    expect(service).toBeTruthy();
  });
});
