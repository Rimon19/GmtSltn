import { TestBed } from '@angular/core/testing';

import { UserMappingService } from './user-mapping.service';

describe('UserMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMappingService = TestBed.get(UserMappingService);
    expect(service).toBeTruthy();
  });
});
