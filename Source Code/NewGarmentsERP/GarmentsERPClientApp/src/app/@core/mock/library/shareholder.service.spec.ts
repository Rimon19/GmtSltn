import { TestBed } from '@angular/core/testing';

import { ShareholderService } from './shareholder.service';

describe('ShareholderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShareholderService = TestBed.get(ShareholderService);
    expect(service).toBeTruthy();
  });
});
