import { TestBed } from '@angular/core/testing';

import { CutandLaydetailsService } from './cutand-laydetails.service';

describe('CutandLaydetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CutandLaydetailsService = TestBed.get(CutandLaydetailsService);
    expect(service).toBeTruthy();
  });
});
