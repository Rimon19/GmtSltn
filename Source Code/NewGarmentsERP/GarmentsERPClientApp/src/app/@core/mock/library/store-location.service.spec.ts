import { TestBed } from '@angular/core/testing';

import { StoreLocationService } from './store-location.service';

describe('StoreLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreLocationService = TestBed.get(StoreLocationService);
    expect(service).toBeTruthy();
  });
});
