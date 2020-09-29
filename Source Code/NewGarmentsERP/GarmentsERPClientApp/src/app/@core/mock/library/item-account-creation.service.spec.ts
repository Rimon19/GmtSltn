import { TestBed } from '@angular/core/testing';

import { ItemAccountCreationService } from './item-account-creation.service';

describe('ItemAccountCreationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemAccountCreationService = TestBed.get(ItemAccountCreationService);
    expect(service).toBeTruthy();
  });
});
