import { TestBed } from '@angular/core/testing';

import { VariableListService } from './variable-list.service';

describe('VariableListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariableListService = TestBed.get(VariableListService);
    expect(service).toBeTruthy();
  });
});
