import { TestBed } from '@angular/core/testing';

import { StaticFeaturesService } from './static-features.service';

describe('StaticFeaturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaticFeaturesService = TestBed.get(StaticFeaturesService);
    expect(service).toBeTruthy();
  });
});
