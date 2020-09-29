import { TestBed } from '@angular/core/testing';

import { MainFabricBookingV2Service } from './main-fabric-booking-v2.service';

describe('MainFabricBookingV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainFabricBookingV2Service = TestBed.get(MainFabricBookingV2Service);
    expect(service).toBeTruthy();
  });
});
