import { TestBed } from '@angular/core/testing';

import { SizeWizeBreakDownGenericCalculationService } from './size-wize-break-down-generic-calculation.service';

describe('SizeWizeBreakDownGenericCalculationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeWizeBreakDownGenericCalculationService = TestBed.get(SizeWizeBreakDownGenericCalculationService);
    expect(service).toBeTruthy();
  });
});
