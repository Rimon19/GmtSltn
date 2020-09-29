import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceBookingForAOPV2Component } from './edit-service-booking-for-aopv2.component';

describe('EditServiceBookingForAOPV2Component', () => {
  let component: EditServiceBookingForAOPV2Component;
  let fixture: ComponentFixture<EditServiceBookingForAOPV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceBookingForAOPV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceBookingForAOPV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
