import { TestBed } from '@angular/core/testing';

import { FabricCostService } from './fabric-cost.service';

describe('FabricCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricCostService = TestBed.get(FabricCostService);
    expect(service).toBeTruthy();
  });
});
