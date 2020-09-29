import { TestBed } from '@angular/core/testing';

import { MarketingTeamInfoService } from './marketing-team-info.service';

describe('MarketingTeamInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarketingTeamInfoService = TestBed.get(MarketingTeamInfoService);
    expect(service).toBeTruthy();
  });
});
