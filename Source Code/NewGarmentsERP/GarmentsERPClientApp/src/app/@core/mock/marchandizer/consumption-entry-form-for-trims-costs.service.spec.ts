import { TestBed } from '@angular/core/testing';

import { ConsumptionEntryFormForTrimsCostsService } from './consumption-entry-form-for-trims-costs.service';

describe('ConsumptionEntryFormForTrimsCostsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumptionEntryFormForTrimsCostsService = TestBed.get(ConsumptionEntryFormForTrimsCostsService);
    expect(service).toBeTruthy();
  });
});
