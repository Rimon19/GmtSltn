import { TestBed } from '@angular/core/testing';

import { SampleDevelopmentOrderDetailsService } from './sample-development-order-details.service';

describe('SampleDevelopmentOrderDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleDevelopmentOrderDetailsService = TestBed.get(SampleDevelopmentOrderDetailsService);
    expect(service).toBeTruthy();
  });
});
