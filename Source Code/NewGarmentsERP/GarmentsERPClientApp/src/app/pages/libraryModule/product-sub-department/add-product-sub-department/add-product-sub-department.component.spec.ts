import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductSubDepartmentComponent } from './add-product-sub-department.component';

describe('AddProductSubDepartmentComponent', () => {
  let component: AddProductSubDepartmentComponent;
  let fixture: ComponentFixture<AddProductSubDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductSubDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductSubDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
