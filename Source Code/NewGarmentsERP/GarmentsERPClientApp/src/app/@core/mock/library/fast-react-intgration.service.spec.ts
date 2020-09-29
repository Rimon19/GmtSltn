import { TestBed } from '@angular/core/testing';

import { FastReactIntgrationService } from './fast-react-intgration.service';

describe('FastReactIntgrationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FastReactIntgrationService = TestBed.get(FastReactIntgrationService);
    expect(service).toBeTruthy();
  });
});
