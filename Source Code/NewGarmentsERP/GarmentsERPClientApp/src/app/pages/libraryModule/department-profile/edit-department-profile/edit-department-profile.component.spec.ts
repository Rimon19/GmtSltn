import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDepartmentProfileComponent } from './edit-department-profile.component';

describe('EditDepartmentProfileComponent', () => {
  let component: EditDepartmentProfileComponent;
  let fixture: ComponentFixture<EditDepartmentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDepartmentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDepartmentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
