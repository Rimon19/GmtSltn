import { TestBed } from '@angular/core/testing';

import { DepartmentProfileService } from './department-profile.service';

describe('DepartmentProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentProfileService = TestBed.get(DepartmentProfileService);
    expect(service).toBeTruthy();
  });
});
