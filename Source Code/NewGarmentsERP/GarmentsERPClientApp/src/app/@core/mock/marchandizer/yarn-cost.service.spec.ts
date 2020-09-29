import { TestBed } from '@angular/core/testing';

import { YarnCostService } from './yarn-cost.service';

describe('YarnCostService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnCostService = TestBed.get(YarnCostService);
    expect(service).toBeTruthy();
  });
});
