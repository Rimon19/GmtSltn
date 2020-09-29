import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKnittingChargeComponent } from './add-knitting-charge.component';

describe('AddKnittingChargeComponent', () => {
  let component: AddKnittingChargeComponent;
  let fixture: ComponentFixture<AddKnittingChargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKnittingChargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKnittingChargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
