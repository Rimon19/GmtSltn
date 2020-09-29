import { TestBed } from '@angular/core/testing';

import { BodyPartService } from './body-part.service';

describe('BodyPartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BodyPartService = TestBed.get(BodyPartService);
    expect(service).toBeTruthy();
  });
});
