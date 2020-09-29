import { TestBed } from '@angular/core/testing';

import { EmailAddressSetupService } from './email-address-setup.service';

describe('EmailAddressSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailAddressSetupService = TestBed.get(EmailAddressSetupService);
    expect(service).toBeTruthy();
  });
});
