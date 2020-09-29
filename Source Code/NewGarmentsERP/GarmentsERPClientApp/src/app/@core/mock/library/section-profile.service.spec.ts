import { TestBed } from '@angular/core/testing';

import { SectionProfileService } from './section-profile.service';

describe('SectionProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SectionProfileService = TestBed.get(SectionProfileService);
    expect(service).toBeTruthy();
  });
});
