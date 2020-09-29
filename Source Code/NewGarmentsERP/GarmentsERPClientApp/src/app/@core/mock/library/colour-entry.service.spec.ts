import { TestBed } from '@angular/core/testing';

import { ColourEntryService } from './colour-entry.service';

describe('ColourEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColourEntryService = TestBed.get(ColourEntryService);
    expect(service).toBeTruthy();
  });
});
