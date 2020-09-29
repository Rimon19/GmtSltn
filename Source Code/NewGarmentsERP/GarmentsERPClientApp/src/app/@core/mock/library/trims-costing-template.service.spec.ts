import { TestBed } from '@angular/core/testing';

import { TrimsCostingTemplateService } from './trims-costing-template.service';

describe('TrimsCostingTemplateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrimsCostingTemplateService = TestBed.get(TrimsCostingTemplateService);
    expect(service).toBeTruthy();
  });
});
