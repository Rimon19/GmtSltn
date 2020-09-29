import { TestBed } from '@angular/core/testing';

import { DropdownValueService } from './dropdown-value.service';

describe('DropdownValueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DropdownValueService = TestBed.get(DropdownValueService);
    expect(service).toBeTruthy();
  });
});
