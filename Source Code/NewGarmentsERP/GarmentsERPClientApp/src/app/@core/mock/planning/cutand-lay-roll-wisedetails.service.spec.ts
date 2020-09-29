import { TestBed } from '@angular/core/testing';

import { CutandLayRollWisedetailsService } from './cutand-lay-roll-wisedetails.service';

describe('CutandLayRollWisedetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLayRollWisedetailsService = TestBed.get(CutandLayRollWisedetailsService);
    expect(service).toBeTruthy();
  });
});
