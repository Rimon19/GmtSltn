import { TestBed } from '@angular/core/testing';

import { TNATaskEntriesService } from './tnatask-entries.service';

describe('TNATaskEntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TNATaskEntriesService = TestBed.get(TNATaskEntriesService);
    expect(service).toBeTruthy();
  });
});
