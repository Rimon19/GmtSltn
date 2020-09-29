import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplierProfileComponent } from './edit-supplier-profile.component';

describe('EditSupplierProfileComponent', () => {
  let component: EditSupplierProfileComponent;
  let fixture: ComponentFixture<EditSupplierProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSupplierProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSupplierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
