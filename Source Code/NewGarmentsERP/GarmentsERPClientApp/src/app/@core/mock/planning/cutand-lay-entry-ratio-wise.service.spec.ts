import { TestBed } from '@angular/core/testing';

import { CutandLayEntryRatioWiseService } from './cutand-lay-entry-ratio-wise.service';

describe('CutandLayEntryRatioWiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLayEntryRatioWiseService = TestBed.get(CutandLayEntryRatioWiseService);
    expect(service).toBeTruthy();
  });
});
