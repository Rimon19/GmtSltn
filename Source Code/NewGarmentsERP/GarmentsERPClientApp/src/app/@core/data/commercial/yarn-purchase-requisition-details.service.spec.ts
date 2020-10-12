import { TestBed } from '@angular/core/testing';

import { YarnPurchaseRequisitionDetailsService } from './yarn-purchase-requisition-details.service';

describe('YarnPurchaseRequisitionDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnPurchaseRequisitionDetailsService = TestBed.get(YarnPurchaseRequisitionDetailsService);
    expect(service).toBeTruthy();
  });
});
