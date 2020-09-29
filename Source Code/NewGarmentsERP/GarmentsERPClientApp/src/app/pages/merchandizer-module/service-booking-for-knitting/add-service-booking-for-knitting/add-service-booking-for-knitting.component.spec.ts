import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBookingForKnittingComponent } from './add-service-booking-for-knitting.component';

describe('AddServiceBookingForKnittingComponent', () => {
  let component: AddServiceBookingForKnittingComponent;
  let fixture: ComponentFixture<AddServiceBookingForKnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBookingForKnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBookingForKnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
