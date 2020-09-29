import { TestBed } from '@angular/core/testing';

import { EmbellishmentWorkOrderV2DetailsService } from './embellishment-work-order-v2-details.service';

describe('EmbellishmentWorkOrderV2DetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmbellishmentWorkOrderV2DetailsService = TestBed.get(EmbellishmentWorkOrderV2DetailsService);
    expect(service).toBeTruthy();
  });
});
