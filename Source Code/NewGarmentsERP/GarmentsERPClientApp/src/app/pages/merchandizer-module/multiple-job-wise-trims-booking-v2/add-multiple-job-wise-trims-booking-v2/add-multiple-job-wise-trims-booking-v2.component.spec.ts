import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMultipleJobWiseTrimsBookingV2Component } from './add-multiple-job-wise-trims-booking-v2.component';

describe('AddMultipleJobWiseTrimsBookingV2Component', () => {
  let component: AddMultipleJobWiseTrimsBookingV2Component;
  let fixture: ComponentFixture<AddMultipleJobWiseTrimsBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMultipleJobWiseTrimsBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMultipleJobWiseTrimsBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
