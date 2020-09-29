import { TestBed } from '@angular/core/testing';

import { MultiJobWSBKnittingDetailsService } from './multi-job-wsbknitting-details.service';

describe('MultiJobWSBKnittingDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultiJobWSBKnittingDetailsService = TestBed.get(MultiJobWSBKnittingDetailsService);
    expect(service).toBeTruthy();
  });
});
