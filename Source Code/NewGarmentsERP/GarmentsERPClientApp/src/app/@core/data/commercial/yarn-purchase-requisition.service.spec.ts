import { TestBed } from '@angular/core/testing';

import { YarnPurchaseRequisitionService } from './yarn-purchase-requisition.service';

describe('YarnPurchaseRequisitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnPurchaseRequisitionService = TestBed.get(YarnPurchaseRequisitionService);
    expect(service).toBeTruthy();
  });
});
