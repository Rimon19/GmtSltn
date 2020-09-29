import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleJobWiseShortTrimsBookingV2Component } from './add-multiple-job-wise-short-trims-booking-v2.component';

describe('AddMultipleJobWiseShortTrimsBookingV2Component', () => {
  let component: AddMultipleJobWiseShortTrimsBookingV2Component;
  let fixture: ComponentFixture<AddMultipleJobWiseShortTrimsBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMultipleJobWiseShortTrimsBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultipleJobWiseShortTrimsBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
