import { TestBed } from '@angular/core/testing';

import { CountryLocationMappingService } from './country-location-mapping.service';

describe('CountryLocationMappingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountryLocationMappingService = TestBed.get(CountryLocationMappingService);
    expect(service).toBeTruthy();
  });
});
