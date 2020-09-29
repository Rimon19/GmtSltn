import { TestBed } from '@angular/core/testing';

import { CutandLayEntryService } from './cutand-lay-entry.service';

describe('CutandLayEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLayEntryService = TestBed.get(CutandLayEntryService);
    expect(service).toBeTruthy();
  });
});
