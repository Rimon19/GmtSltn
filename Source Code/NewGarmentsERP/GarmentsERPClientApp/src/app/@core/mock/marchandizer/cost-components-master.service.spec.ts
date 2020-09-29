import { TestBed } from '@angular/core/testing';

import { CostComponentsMasterService } from './cost-components-master.service';

describe('CostComponentsMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CostComponentsMasterService = TestBed.get(CostComponentsMasterService);
    expect(service).toBeTruthy();
  });
});
