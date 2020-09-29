import { TestBed } from '@angular/core/testing';

import { MinLeadTimeSlabsService } from './min-lead-time-slabs.service';

describe('MinLeadTimeSlabsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MinLeadTimeSlabsService = TestBed.get(MinLeadTimeSlabsService);
    expect(service).toBeTruthy();
  });
});
