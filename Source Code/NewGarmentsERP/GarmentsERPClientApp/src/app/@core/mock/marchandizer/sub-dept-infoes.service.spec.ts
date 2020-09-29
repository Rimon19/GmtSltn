import { TestBed } from '@angular/core/testing';

import { SubDeptInfoesService } from './sub-dept-infoes.service';

describe('SubDeptInfoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SubDeptInfoesService = TestBed.get(SubDeptInfoesService);
    expect(service).toBeTruthy();
  });
});
