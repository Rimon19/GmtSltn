import { TestBed } from '@angular/core/testing';

import { CutandLayEntryRatioWiseDetailsService } from './cutand-lay-entry-ratio-wise-details.service';

describe('CutandLayEntryRatioWiseDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLayEntryRatioWiseDetailsService = TestBed.get(CutandLayEntryRatioWiseDetailsService);
    expect(service).toBeTruthy();
  });
});
