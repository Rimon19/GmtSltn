import { TestBed } from '@angular/core/testing';

import { TrimsGroupService } from './trims-group.service';

describe('TrimsGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrimsGroupService = TestBed.get(TrimsGroupService);
    expect(service).toBeTruthy();
  });
});
