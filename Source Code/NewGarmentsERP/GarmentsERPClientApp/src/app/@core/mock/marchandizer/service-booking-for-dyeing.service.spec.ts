import { TestBed } from '@angular/core/testing';

import { ServiceBookingForDyeingService } from './service-booking-for-dyeing.service';

describe('ServiceBookingForDyeingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForDyeingService = TestBed.get(ServiceBookingForDyeingService);
    expect(service).toBeTruthy();
  });
});
