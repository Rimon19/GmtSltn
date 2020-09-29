import { TestBed } from '@angular/core/testing';

import { YarnTypesService } from './yarn-types.service';

describe('YarnTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnTypesService = TestBed.get(YarnTypesService);
    expect(service).toBeTruthy();
  });
});
