import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultipleJobWiseShortTrimsBookingV2Component } from './edit-multiple-job-wise-short-trims-booking-v2.component';

describe('EditMultipleJobWiseShortTrimsBookingV2Component', () => {
  let component: EditMultipleJobWiseShortTrimsBookingV2Component;
  let fixture: ComponentFixture<EditMultipleJobWiseShortTrimsBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMultipleJobWiseShortTrimsBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMultipleJobWiseShortTrimsBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
