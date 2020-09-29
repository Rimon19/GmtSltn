import { TestBed } from '@angular/core/testing';

import { TnaMailSetupService } from './tna-mail-setup.service';

describe('TnaMailSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TnaMailSetupService = TestBed.get(TnaMailSetupService);
    expect(service).toBeTruthy();
  });
});
