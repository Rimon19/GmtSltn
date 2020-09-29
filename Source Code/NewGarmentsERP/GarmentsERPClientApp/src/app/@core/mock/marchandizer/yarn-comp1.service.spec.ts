import { TestBed } from '@angular/core/testing';

import { YarnComp1Service } from './yarn-comp1.service';

describe('YarnComp1Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YarnComp1Service = TestBed.get(YarnComp1Service);
    expect(service).toBeTruthy();
  });
});
