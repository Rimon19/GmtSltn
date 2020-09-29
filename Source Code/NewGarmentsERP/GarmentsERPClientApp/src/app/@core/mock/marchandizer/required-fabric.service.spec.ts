import { TestBed } from '@angular/core/testing';

import { RequiredFabricService } from './required-fabric.service';

describe('RequiredFabricService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequiredFabricService = TestBed.get(RequiredFabricService);
    expect(service).toBeTruthy();
  });
});
