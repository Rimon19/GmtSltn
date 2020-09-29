import { TestBed } from '@angular/core/testing';

import { GarmentsSampleEntrieService } from './garments-sample-entrie.service';

describe('GarmentsSampleEntrieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GarmentsSampleEntrieService = TestBed.get(GarmentsSampleEntrieService);
    expect(service).toBeTruthy();
  });
});
