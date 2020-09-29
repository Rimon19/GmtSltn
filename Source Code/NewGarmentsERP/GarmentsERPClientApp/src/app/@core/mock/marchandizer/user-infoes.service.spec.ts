import { TestBed } from '@angular/core/testing';

import { UserInfoesService } from './user-infoes.service';

describe('UserInfoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserInfoesService = TestBed.get(UserInfoesService);
    expect(service).toBeTruthy();
  });
});
