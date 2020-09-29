import { TestBed } from '@angular/core/testing';

import { SampleFabricBookingWithorderService } from './sample-fabric-booking-withorder.service';

describe('SampleFabricBookingWithorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleFabricBookingWithorderService = TestBed.get(SampleFabricBookingWithorderService);
    expect(service).toBeTruthy();
  });
});
