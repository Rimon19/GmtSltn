import { TestBed } from '@angular/core/testing';

import { SewingLineService } from './sewing-line.service';

describe('SewingLineService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SewingLineService = TestBed.get(SewingLineService);
    expect(service).toBeTruthy();
  });
});
