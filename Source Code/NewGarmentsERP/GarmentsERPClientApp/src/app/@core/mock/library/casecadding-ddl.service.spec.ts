import { TestBed } from '@angular/core/testing';

import { CasecaddingDDLService } from './casecadding-ddl.service';

describe('CasecaddingDDLService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CasecaddingDDLService = TestBed.get(CasecaddingDDLService);
    expect(service).toBeTruthy();
  });
});
