import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBookingForAOPV2Component } from './add-service-booking-for-aopv2.component';

describe('AddServiceBookingForAOPV2Component', () => {
  let component: AddServiceBookingForAOPV2Component;
  let fixture: ComponentFixture<AddServiceBookingForAOPV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBookingForAOPV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBookingForAOPV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
