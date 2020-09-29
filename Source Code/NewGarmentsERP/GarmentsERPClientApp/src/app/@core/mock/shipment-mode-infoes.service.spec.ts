import { TestBed } from '@angular/core/testing';

import { ShipmentModeInfoesService } from './shipment-mode-infoes.service';

describe('ShipmentModeInfoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShipmentModeInfoesService = TestBed.get(ShipmentModeInfoesService);
    expect(service).toBeTruthy();
  });
});
