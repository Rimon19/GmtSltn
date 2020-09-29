import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeeInfoComponent } from './add-employee-info.component';

describe('AddEmployeeInfoComponent', () => {
  let component: AddEmployeeInfoComponent;
  let fixture: ComponentFixture<AddEmployeeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmployeeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmployeeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
