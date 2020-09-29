import { TestBed } from '@angular/core/testing';

import { YarnCountDeterminationService } from './yarn-count-determination.service';

describe('YarnCountDeterminationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnCountDeterminationService = TestBed.get(YarnCountDeterminationService);
    expect(service).toBeTruthy();
  });
});
