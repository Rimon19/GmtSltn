import { TestBed } from '@angular/core/testing';

import { DivisionProfileService } from './division-profile.service';

describe('DivisionProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DivisionProfileService = TestBed.get(DivisionProfileService);
    expect(service).toBeTruthy();
  });
});
