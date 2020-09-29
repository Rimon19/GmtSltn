import { TestBed } from '@angular/core/testing';

import { CapacityAllocationsService } from './capacity-allocations.service';

describe('CapacityAllocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapacityAllocationsService = TestBed.get(CapacityAllocationsService);
    expect(service).toBeTruthy();
  });
});
