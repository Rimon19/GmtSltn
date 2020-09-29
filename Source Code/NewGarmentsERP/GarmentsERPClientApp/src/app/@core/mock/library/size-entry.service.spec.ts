import { TestBed } from '@angular/core/testing';

import { SizeEntryService } from './size-entry.service';

describe('SizeEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeEntryService = TestBed.get(SizeEntryService);
    expect(service).toBeTruthy();
  });
});
