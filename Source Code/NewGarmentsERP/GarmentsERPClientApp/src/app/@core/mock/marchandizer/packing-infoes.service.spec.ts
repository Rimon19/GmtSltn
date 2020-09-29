import { TestBed } from '@angular/core/testing';

import { PackingInfoesService } from './packing-infoes.service';

describe('PackingInfoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PackingInfoesService = TestBed.get(PackingInfoesService);
    expect(service).toBeTruthy();
  });
});
