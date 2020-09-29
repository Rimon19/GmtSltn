import { TestBed } from '@angular/core/testing';

import { RequiredEmbellishmentService } from './required-embellishment.service';

describe('RequiredEmbellishmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequiredEmbellishmentService = TestBed.get(RequiredEmbellishmentService);
    expect(service).toBeTruthy();
  });
});
