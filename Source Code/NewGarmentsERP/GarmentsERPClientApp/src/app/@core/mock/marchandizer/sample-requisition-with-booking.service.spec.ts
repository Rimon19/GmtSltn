import { TestBed } from '@angular/core/testing';

import { SampleRequisitionWithBookingService } from './sample-requisition-with-booking.service';

describe('SampleRequisitionWithBookingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleRequisitionWithBookingService = TestBed.get(SampleRequisitionWithBookingService);
    expect(service).toBeTruthy();
  });
});
