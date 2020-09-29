import { TestBed } from '@angular/core/testing';

import { AccountingYearSubInfoService } from './accounting-year-sub-info.service';

describe('AccountingYearSubInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountingYearSubInfoService = TestBed.get(AccountingYearSubInfoService);
    expect(service).toBeTruthy();
  });
});
