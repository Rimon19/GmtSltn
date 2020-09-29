import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMultiJobWiseServiceBookingKnittingComponent } from './edit-multi-job-wise-service-booking-knitting.component';

describe('EditMultiJobWiseServiceBookingKnittingComponent', () => {
  let component: EditMultiJobWiseServiceBookingKnittingComponent;
  let fixture: ComponentFixture<EditMultiJobWiseServiceBookingKnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMultiJobWiseServiceBookingKnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMultiJobWiseServiceBookingKnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
