import { TestBed } from '@angular/core/testing';

import { MachineEntrieService } from './machine-entrie.service';

describe('MachineEntrieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MachineEntrieService = TestBed.get(MachineEntrieService);
    expect(service).toBeTruthy();
  });
});
