import { TestBed } from '@angular/core/testing';

import { SewingOperationForWorkStudyService } from './sewing-operation-for-work-study.service';

describe('SewingOperationForWorkStudyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SewingOperationForWorkStudyService = TestBed.get(SewingOperationForWorkStudyService);
    expect(service).toBeTruthy();
  });
});
