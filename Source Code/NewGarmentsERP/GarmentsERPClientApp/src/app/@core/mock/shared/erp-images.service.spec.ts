import { TestBed } from '@angular/core/testing';

import { ErpImagesService } from './erp-images.service';

describe('ErpImagesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErpImagesService = TestBed.get(ErpImagesService);
    expect(service).toBeTruthy();
  });
});
