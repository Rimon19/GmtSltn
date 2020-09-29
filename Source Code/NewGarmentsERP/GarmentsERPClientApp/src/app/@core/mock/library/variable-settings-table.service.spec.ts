import { TestBed } from '@angular/core/testing';

import { VariableSettingsTableService } from './variable-settings-table.service';

describe('VariableSettingsTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VariableSettingsTableService = TestBed.get(VariableSettingsTableService);
    expect(service).toBeTruthy();
  });
});
