import { TestBed } from '@angular/core/testing';

import { BodyPartEntryService } from './body-part-entry.service';

describe('BodyPartEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodyPartEntryService = TestBed.get(BodyPartEntryService);
    expect(service).toBeTruthy();
  });
});
