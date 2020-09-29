import { TestBed } from '@angular/core/testing';

import { EmbellishmentWorkOrderV2Service } from './embellishment-work-order-v2.service';

describe('EmbellishmentWorkOrderV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbellishmentWorkOrderV2Service = TestBed.get(EmbellishmentWorkOrderV2Service);
    expect(service).toBeTruthy();
  });
});
