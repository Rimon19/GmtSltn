import { TestBed } from '@angular/core/testing';

import { SampledetailsService } from './sampledetails.service';

describe('SampledetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampledetailsService = TestBed.get(SampledetailsService);
    expect(service).toBeTruthy();
  });
});
