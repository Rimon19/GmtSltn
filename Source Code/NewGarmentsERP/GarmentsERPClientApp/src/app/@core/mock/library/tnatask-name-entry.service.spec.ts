import { TestBed } from '@angular/core/testing';

import { TNATaskNameEntryService } from './tnatask-name-entry.service';

describe('TNATaskNameEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TNATaskNameEntryService = TestBed.get(TNATaskNameEntryService);
    expect(service).toBeTruthy();
  });
});
