import { TestBed } from '@angular/core/testing';

import { SizeDitsService } from './size-dits.service';

describe('SizeDitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SizeDitsService = TestBed.get(SizeDitsService);
    expect(service).toBeTruthy();
  });
});
