import { TestBed } from '@angular/core/testing';

import { SampleFabricBookingWithoutorderMastersService } from './sample-fabric-booking-withoutorder-masters.service';

describe('SampleFabricBookingWithoutorderMastersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleFabricBookingWithoutorderMastersService = TestBed.get(SampleFabricBookingWithoutorderMastersService);
    expect(service).toBeTruthy();
  });
});
