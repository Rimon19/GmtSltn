import { TestBed } from '@angular/core/testing';

import { GarmentsItemEntriesService } from './garments-item-entries.service';

describe('GarmentsItemEntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GarmentsItemEntriesService = TestBed.get(GarmentsItemEntriesService);
    expect(service).toBeTruthy();
  });
});
