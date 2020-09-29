import { TestBed } from '@angular/core/testing';

import { FinancialParameterSetupService } from './financial-parameter-setup.service';

describe('FinancialParameterSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinancialParameterSetupService = TestBed.get(FinancialParameterSetupService);
    expect(service).toBeTruthy();
  });
});
