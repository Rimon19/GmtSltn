import { TestBed } from '@angular/core/testing';

import { ConsumptionEntryFormService } from './consumption-entry-form.service';

describe('ConsumptionEntryFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumptionEntryFormService = TestBed.get(ConsumptionEntryFormService);
    expect(service).toBeTruthy();
  });
});
