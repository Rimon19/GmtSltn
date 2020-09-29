import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleRequisitionWithBookingComponent } from './add-sample-requisition-with-booking.component';

describe('AddSampleRequisitionWithBookingComponent', () => {
  let component: AddSampleRequisitionWithBookingComponent;
  let fixture: ComponentFixture<AddSampleRequisitionWithBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleRequisitionWithBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleRequisitionWithBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
