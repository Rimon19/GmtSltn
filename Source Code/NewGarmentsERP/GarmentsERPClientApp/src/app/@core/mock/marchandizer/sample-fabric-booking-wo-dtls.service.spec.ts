import { TestBed } from '@angular/core/testing';

import { SampleFabricBookingWoDtlsService } from './sample-fabric-booking-wo-dtls.service';

describe('SampleFabricBookingWoDtlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleFabricBookingWoDtlsService = TestBed.get(SampleFabricBookingWoDtlsService);
    expect(service).toBeTruthy();
  });
});
