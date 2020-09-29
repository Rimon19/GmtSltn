import { TestBed } from '@angular/core/testing';

import { SewingOperationService } from './sewing-operation.service';

describe('SewingOperationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SewingOperationService = TestBed.get(SewingOperationService);
    expect(service).toBeTruthy();
  });
});
