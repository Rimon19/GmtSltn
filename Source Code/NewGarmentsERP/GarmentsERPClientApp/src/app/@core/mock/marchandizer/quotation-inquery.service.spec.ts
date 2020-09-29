import { TestBed } from '@angular/core/testing';

import { QuotationInqueryService } from './quotation-inquery.service';

describe('QuotationInqueryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuotationInqueryService = TestBed.get(QuotationInqueryService);
    expect(service).toBeTruthy();
  });
});
