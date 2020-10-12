import { TestBed } from '@angular/core/testing';

import { PiDetailsService } from './pi-details.service';

describe('PiDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiDetailsService = TestBed.get(PiDetailsService);
    expect(service).toBeTruthy();
  });
});
