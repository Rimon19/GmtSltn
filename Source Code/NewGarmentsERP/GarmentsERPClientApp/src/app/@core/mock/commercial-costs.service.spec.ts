import { TestBed } from '@angular/core/testing';

import { CommercialCostsService } from './commercial-costs.service';

describe('CommercialCostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommercialCostsService = TestBed.get(CommercialCostsService);
    expect(service).toBeTruthy();
  });
});
