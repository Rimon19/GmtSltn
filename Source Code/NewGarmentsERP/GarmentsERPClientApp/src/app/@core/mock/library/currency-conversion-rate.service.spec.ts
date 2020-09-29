import { TestBed } from '@angular/core/testing';

import { CurrencyConversionRateService } from './currency-conversion-rate.service';

describe('CurrencyConversionRateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrencyConversionRateService = TestBed.get(CurrencyConversionRateService);
    expect(service).toBeTruthy();
  });
});
