import { TestBed } from '@angular/core/testing';

import { LabTestRateChartService } from './lab-test-rate-chart.service';

describe('LabTestRateChartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LabTestRateChartService = TestBed.get(LabTestRateChartService);
    expect(service).toBeTruthy();
  });
});
