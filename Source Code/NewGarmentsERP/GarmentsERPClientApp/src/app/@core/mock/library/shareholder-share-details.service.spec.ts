import { TestBed } from '@angular/core/testing';

import { ShareholderShareDetailsService } from './shareholder-share-details.service';

describe('ShareholderShareDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareholderShareDetailsService = TestBed.get(ShareholderShareDetailsService);
    expect(service).toBeTruthy();
  });
});
