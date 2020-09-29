import { TestBed } from '@angular/core/testing';

import { ServiceBookingForKnitingandDyeingWithoutOrderService } from './service-booking-for-knitingand-dyeing-without-order.service';

describe('ServiceBookingForKnitingandDyeingWithoutOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceBookingForKnitingandDyeingWithoutOrderService = TestBed.get(ServiceBookingForKnitingandDyeingWithoutOrderService);
    expect(service).toBeTruthy();
  });
});
