import { TestBed } from '@angular/core/testing';

import { SalesForecastEntryService } from './sales-forecast-entry.service';

describe('SalesForecastEntryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SalesForecastEntryService = TestBed.get(SalesForecastEntryService);
    expect(service).toBeTruthy();
  });
});
