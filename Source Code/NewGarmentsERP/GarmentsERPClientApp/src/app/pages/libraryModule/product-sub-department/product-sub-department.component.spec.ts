import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSubDepartmentComponent } from './product-sub-department.component';

describe('ProductSubDepartmentComponent', () => {
  let component: ProductSubDepartmentComponent;
  let fixture: ComponentFixture<ProductSubDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductSubDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductSubDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
