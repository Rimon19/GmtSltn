import { TestBed } from '@angular/core/testing';

import { CutandLayEntryRatioWiseUrmiDetailsService } from './cutand-lay-entry-ratio-wise-urmi-details.service';

describe('CutandLayEntryRatioWiseUrmiDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLayEntryRatioWiseUrmiDetailsService = TestBed.get(CutandLayEntryRatioWiseUrmiDetailsService);
    expect(service).toBeTruthy();
  });
});
