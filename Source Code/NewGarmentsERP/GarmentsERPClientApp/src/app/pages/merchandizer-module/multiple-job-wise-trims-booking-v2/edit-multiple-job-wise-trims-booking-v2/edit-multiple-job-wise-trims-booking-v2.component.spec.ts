import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultipleJobWiseTrimsBookingV2Component } from './edit-multiple-job-wise-trims-booking-v2.component';

describe('EditMultipleJobWiseTrimsBookingV2Component', () => {
  let component: EditMultipleJobWiseTrimsBookingV2Component;
  let fixture: ComponentFixture<EditMultipleJobWiseTrimsBookingV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMultipleJobWiseTrimsBookingV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMultipleJobWiseTrimsBookingV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
