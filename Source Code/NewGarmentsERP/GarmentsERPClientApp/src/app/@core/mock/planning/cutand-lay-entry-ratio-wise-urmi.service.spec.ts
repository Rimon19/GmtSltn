import { TestBed } from '@angular/core/testing';

import { CutandLayEntryRatioWiseUrmiService } from './cutand-lay-entry-ratio-wise-urmi.service';

describe('CutandLayEntryRatioWiseUrmiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLayEntryRatioWiseUrmiService = TestBed.get(CutandLayEntryRatioWiseUrmiService);
    expect(service).toBeTruthy();
  });
});
