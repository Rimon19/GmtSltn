import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultiJobWiseServiceBookingKnittingComponent } from './add-multi-job-wise-service-booking-knitting.component';

describe('AddMultiJobWiseServiceBookingKnittingComponent', () => {
  let component: AddMultiJobWiseServiceBookingKnittingComponent;
  let fixture: ComponentFixture<AddMultiJobWiseServiceBookingKnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMultiJobWiseServiceBookingKnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultiJobWiseServiceBookingKnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
