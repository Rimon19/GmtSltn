import { TestBed } from '@angular/core/testing';

import { SeasonInfoesService } from './season-infoes.service';

describe('SeasonInfoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeasonInfoesService = TestBed.get(SeasonInfoesService);
    expect(service).toBeTruthy();
  });
});
