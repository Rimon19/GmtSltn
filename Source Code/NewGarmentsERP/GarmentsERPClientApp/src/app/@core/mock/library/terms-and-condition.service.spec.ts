import { TestBed } from '@angular/core/testing';

import { TermsAndConditionService } from './terms-and-condition.service';

describe('TermsAndConditionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TermsAndConditionService = TestBed.get(TermsAndConditionService);
    expect(service).toBeTruthy();
  });
});
