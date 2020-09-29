import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleJobWiseTrimsBookingV2Component } from './multiple-job-wise-trims-booking-v2.component';

describe('MultipleJobWiseTrimsBookingV2Component', () => {
  let component: MultipleJobWiseTrimsBookingV2Component;
  let fixture: ComponentFixture<MultipleJobWiseTrimsBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleJobWiseTrimsBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleJobWiseTrimsBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
