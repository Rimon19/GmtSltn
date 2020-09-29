import { TestBed } from '@angular/core/testing';

import { DateResizeService } from './date-resize.service';

describe('DateResizeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateResizeService = TestBed.get(DateResizeService);
    expect(service).toBeTruthy();
  });
});
