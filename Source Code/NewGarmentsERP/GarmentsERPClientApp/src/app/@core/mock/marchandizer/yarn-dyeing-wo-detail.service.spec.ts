import { TestBed } from '@angular/core/testing';

import { YarnDyeingWoDetailService } from './yarn-dyeing-wo-detail.service';

describe('YarnDyeingWoDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnDyeingWoDetailService = TestBed.get(YarnDyeingWoDetailService);
    expect(service).toBeTruthy();
  });
});
