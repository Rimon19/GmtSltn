import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductSubDepartmentComponent } from './edit-product-sub-department.component';

describe('EditProductSubDepartmentComponent', () => {
  let component: EditProductSubDepartmentComponent;
  let fixture: ComponentFixture<EditProductSubDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductSubDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductSubDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
