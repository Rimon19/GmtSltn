import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRequisitionWithBookingComponent } from './sample-requisition-with-booking.component';

describe('SampleRequisitionWithBookingComponent', () => {
  let component: SampleRequisitionWithBookingComponent;
  let fixture: ComponentFixture<SampleRequisitionWithBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRequisitionWithBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRequisitionWithBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
