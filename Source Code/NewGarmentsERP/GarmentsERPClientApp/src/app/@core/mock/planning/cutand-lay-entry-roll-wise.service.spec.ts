import { TestBed } from '@angular/core/testing';

import { CutandLayEntryRollWiseService } from './cutand-lay-entry-roll-wise.service';

describe('CutandLayEntryRollWiseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLayEntryRollWiseService = TestBed.get(CutandLayEntryRollWiseService);
    expect(service).toBeTruthy();
  });
});
