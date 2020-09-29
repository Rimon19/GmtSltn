import { TestBed } from '@angular/core/testing';

import { ProductSubDepartmentService } from './product-sub-department.service';

describe('ProductSubDepartmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductSubDepartmentService = TestBed.get(ProductSubDepartmentService);
    expect(service).toBeTruthy();
  });
});
