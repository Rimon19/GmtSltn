import { TestBed } from '@angular/core/testing';

import { SalesForecastEntryDetailsService } from './sales-forecast-entry-details.service';

describe('SalesForecastEntryDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesForecastEntryDetailsService = TestBed.get(SalesForecastEntryDetailsService);
    expect(service).toBeTruthy();
  });
});
