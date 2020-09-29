import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiJobWiseServiceBookingKnittingComponent } from './multi-job-wise-service-booking-knitting.component';

describe('MultiJobWiseServiceBookingKnittingComponent', () => {
  let component: MultiJobWiseServiceBookingKnittingComponent;
  let fixture: ComponentFixture<MultiJobWiseServiceBookingKnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiJobWiseServiceBookingKnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiJobWiseServiceBookingKnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
