import { TestBed } from '@angular/core/testing';

import { ProductionFloorService } from './production-floor.service';

describe('ProductionFloorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductionFloorService = TestBed.get(ProductionFloorService);
    expect(service).toBeTruthy();
  });
});
