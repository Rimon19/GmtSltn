import { TestBed } from '@angular/core/testing';

import { FabricNaturesService } from './fabric-natures.service';

describe('FabricNaturesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FabricNaturesService = TestBed.get(FabricNaturesService);
    expect(service).toBeTruthy();
  });
});
