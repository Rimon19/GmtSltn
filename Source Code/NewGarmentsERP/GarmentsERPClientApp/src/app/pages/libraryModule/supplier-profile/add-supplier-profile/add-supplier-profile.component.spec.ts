import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplierProfileComponent } from './add-supplier-profile.component';

describe('AddSupplierProfileComponent', () => {
  let component: AddSupplierProfileComponent;
  let fixture: ComponentFixture<AddSupplierProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSupplierProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSupplierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
