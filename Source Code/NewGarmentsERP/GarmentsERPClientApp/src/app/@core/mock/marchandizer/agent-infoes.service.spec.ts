import { TestBed } from '@angular/core/testing';

import { AgentInfoesService } from './agent-infoes.service';

describe('AgentInfoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgentInfoesService = TestBed.get(AgentInfoesService);
    expect(service).toBeTruthy();
  });
});
