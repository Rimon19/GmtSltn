import { TestBed } from '@angular/core/testing';

import { RequiredAccessoriesService } from './required-accessories.service';

describe('RequiredAccessoriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequiredAccessoriesService = TestBed.get(RequiredAccessoriesService);
    expect(service).toBeTruthy();
  });
});
