import { TestBed } from '@angular/core/testing';

import { JournalSetupService } from './journal-setup.service';

describe('JournalSetupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JournalSetupService = TestBed.get(JournalSetupService);
    expect(service).toBeTruthy();
  });
});
