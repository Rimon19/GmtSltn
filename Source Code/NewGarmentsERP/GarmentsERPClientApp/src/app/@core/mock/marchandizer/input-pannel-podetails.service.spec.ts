import { TestBed } from '@angular/core/testing';

import { InputPannelPodetailsService } from './input-pannel-podetails.service';

describe('InputPannelPodetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputPannelPodetailsService = TestBed.get(InputPannelPodetailsService);
    expect(service).toBeTruthy();
  });
});
