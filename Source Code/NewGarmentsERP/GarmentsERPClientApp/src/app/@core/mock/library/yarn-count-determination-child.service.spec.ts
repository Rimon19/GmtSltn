import { TestBed } from '@angular/core/testing';

import { YarnCountDeterminationChildService } from './yarn-count-determination-child.service';

describe('YarnCountDeterminationChildService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnCountDeterminationChildService = TestBed.get(YarnCountDeterminationChildService);
    expect(service).toBeTruthy();
  });
});
