import { TestBed } from '@angular/core/testing';

import { MultipleJobWiseEmbellishmentWorkOrderService } from './multiple-job-wise-embellishment-work-order.service';

describe('MultipleJobWiseEmbellishmentWorkOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MultipleJobWiseEmbellishmentWorkOrderService = TestBed.get(MultipleJobWiseEmbellishmentWorkOrderService);
    expect(service).toBeTruthy();
  });
});
