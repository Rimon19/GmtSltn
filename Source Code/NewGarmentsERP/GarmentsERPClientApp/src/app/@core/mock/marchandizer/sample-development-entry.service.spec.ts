import { TestBed } from '@angular/core/testing';

import { SampleDevelopmentEntryService } from './sample-development-entry.service';

describe('SampleDevelopmentEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleDevelopmentEntryService = TestBed.get(SampleDevelopmentEntryService);
    expect(service).toBeTruthy();
  });
});
