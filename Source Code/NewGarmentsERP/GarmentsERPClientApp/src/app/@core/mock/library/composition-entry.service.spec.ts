import { TestBed } from '@angular/core/testing';

import { CompositionEntryService } from './composition-entry.service';

describe('CompositionEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompositionEntryService = TestBed.get(CompositionEntryService);
    expect(service).toBeTruthy();
  });
});
