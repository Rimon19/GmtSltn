import { TestBed } from '@angular/core/testing';

import { MailRecipientGroupService } from './mail-recipient-group.service';

describe('MailRecipientGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailRecipientGroupService = TestBed.get(MailRecipientGroupService);
    expect(service).toBeTruthy();
  });
});
