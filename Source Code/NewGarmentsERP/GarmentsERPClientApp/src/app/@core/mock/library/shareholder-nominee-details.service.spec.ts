import { TestBed } from '@angular/core/testing';

import { ShareholderNomineeDetailsService } from './shareholder-nominee-details.service';

describe('ShareholderNomineeDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareholderNomineeDetailsService = TestBed.get(ShareholderNomineeDetailsService);
    expect(service).toBeTruthy();
  });
});
