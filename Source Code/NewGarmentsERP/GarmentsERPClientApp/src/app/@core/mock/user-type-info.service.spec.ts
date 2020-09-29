import { TestBed } from '@angular/core/testing';

import { UserTypeInfoService } from './user-type-info.service';

describe('UserTypeInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTypeInfoService = TestBed.get(UserTypeInfoService);
    expect(service).toBeTruthy();
  });
});
