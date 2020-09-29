import { TestBed } from '@angular/core/testing';

import { DatapassingService } from './datapassing.service';

describe('DatapassingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatapassingService = TestBed.get(DatapassingService);
    expect(service).toBeTruthy();
  });
});
