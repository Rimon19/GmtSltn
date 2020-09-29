import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingForAOPV2Component } from './service-booking-for-aopv2.component';

describe('ServiceBookingForAOPV2Component', () => {
  let component: ServiceBookingForAOPV2Component;
  let fixture: ComponentFixture<ServiceBookingForAOPV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookingForAOPV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingForAOPV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
