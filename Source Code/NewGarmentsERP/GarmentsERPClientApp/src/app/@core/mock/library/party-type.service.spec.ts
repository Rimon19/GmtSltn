import { TestBed } from '@angular/core/testing';

import { PartyTypeService } from './party-type.service';

describe('PartyTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartyTypeService = TestBed.get(PartyTypeService);
    expect(service).toBeTruthy();
  });
});
