import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDepartmentProfileComponent } from './add-department-profile.component';

describe('AddDepartmentProfileComponent', () => {
  let component: AddDepartmentProfileComponent;
  let fixture: ComponentFixture<AddDepartmentProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDepartmentProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDepartmentProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
