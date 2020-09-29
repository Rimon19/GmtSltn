import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleRequisitionWithBookingComponent } from './edit-sample-requisition-with-booking.component';

describe('EditSampleRequisitionWithBookingComponent', () => {
  let component: EditSampleRequisitionWithBookingComponent;
  let fixture: ComponentFixture<EditSampleRequisitionWithBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleRequisitionWithBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleRequisitionWithBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
