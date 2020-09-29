import { TestBed } from '@angular/core/testing';

import { SizeWisePannelPodetailsService } from './size-wise-pannel-podetails.service';

describe('SizeWisePannelPodetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeWisePannelPodetailsService = TestBed.get(SizeWisePannelPodetailsService);
    expect(service).toBeTruthy();
  });
});
