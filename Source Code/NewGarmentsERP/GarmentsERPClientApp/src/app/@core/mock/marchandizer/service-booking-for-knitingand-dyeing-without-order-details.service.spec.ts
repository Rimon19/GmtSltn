import { TestBed } from '@angular/core/testing';

import { ServiceBookingForKnitingandDyeingWithoutOrderDetailsService } from './service-booking-for-knitingand-dyeing-without-order-details.service';

describe('ServiceBookingForKnitingandDyeingWithoutOrderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForKnitingandDyeingWithoutOrderDetailsService = TestBed.get(ServiceBookingForKnitingandDyeingWithoutOrderDetailsService);
    expect(service).toBeTruthy();
  });
});
