import { TestBed } from '@angular/core/testing';

import { ItemDetailsOrderEntriesService } from './item-details-order-entries.service';

describe('ItemDetailsOrderEntriesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemDetailsOrderEntriesService = TestBed.get(ItemDetailsOrderEntriesService);
    expect(service).toBeTruthy();
  });
});
