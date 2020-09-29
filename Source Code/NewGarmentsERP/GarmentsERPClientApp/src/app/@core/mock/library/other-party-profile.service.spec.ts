import { TestBed } from '@angular/core/testing';

import { OtherPartyProfileService } from './other-party-profile.service';

describe('OtherPartyProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherPartyProfileService = TestBed.get(OtherPartyProfileService);
    expect(service).toBeTruthy();
  });
});
