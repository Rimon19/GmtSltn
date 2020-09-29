import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleJobWiseShortTrimsBookingV2Component } from './multiple-job-wise-short-trims-booking-v2.component';

describe('MultipleJobWiseShortTrimsBookingV2Component', () => {
  let component: MultipleJobWiseShortTrimsBookingV2Component;
  let fixture: ComponentFixture<MultipleJobWiseShortTrimsBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleJobWiseShortTrimsBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleJobWiseShortTrimsBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
