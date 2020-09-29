import { TestBed } from '@angular/core/testing';

import { FabricDesPreCostService } from './fabric-des-pre-cost.service';

describe('FabricDesPreCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricDesPreCostService = TestBed.get(FabricDesPreCostService);
    expect(service).toBeTruthy();
  });
});
