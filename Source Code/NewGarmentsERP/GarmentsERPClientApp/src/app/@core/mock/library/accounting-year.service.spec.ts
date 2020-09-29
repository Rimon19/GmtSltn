import { TestBed } from '@angular/core/testing';

import { AccountingYearService } from './accounting-year.service';

describe('AccountingYearService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountingYearService = TestBed.get(AccountingYearService);
    expect(service).toBeTruthy();
  });
});
