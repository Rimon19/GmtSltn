import { TestBed } from '@angular/core/testing';

import { MasterPodetailsInfroesService } from './master-podetails-infroes.service';

describe('MasterPodetailsInfroesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MasterPodetailsInfroesService = TestBed.get(MasterPodetailsInfroesService);
    expect(service).toBeTruthy();
  });
});
