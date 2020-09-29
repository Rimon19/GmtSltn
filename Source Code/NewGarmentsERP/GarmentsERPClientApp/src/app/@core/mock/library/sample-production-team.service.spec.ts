import { TestBed } from '@angular/core/testing';

import { SampleProductionTeamService } from './sample-production-team.service';

describe('SampleProductionTeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SampleProductionTeamService = TestBed.get(SampleProductionTeamService);
    expect(service).toBeTruthy();
  });
});
