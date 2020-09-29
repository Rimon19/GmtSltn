import { TestBed } from '@angular/core/testing';

import { GroupProfileService } from './group-profile.service';

describe('GroupProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupProfileService = TestBed.get(GroupProfileService);
    expect(service).toBeTruthy();
  });
});
