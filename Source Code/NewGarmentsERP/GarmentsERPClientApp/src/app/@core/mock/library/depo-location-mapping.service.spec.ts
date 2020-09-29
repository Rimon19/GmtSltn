import { TestBed } from '@angular/core/testing';

import { DepoLocationMappingService } from './depo-location-mapping.service';

describe('DepoLocationMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepoLocationMappingService = TestBed.get(DepoLocationMappingService);
    expect(service).toBeTruthy();
  });
});
