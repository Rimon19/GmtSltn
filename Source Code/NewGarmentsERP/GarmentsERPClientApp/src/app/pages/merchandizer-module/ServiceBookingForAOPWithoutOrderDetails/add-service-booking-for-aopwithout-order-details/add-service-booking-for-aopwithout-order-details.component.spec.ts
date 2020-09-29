import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBookingForAOPWithoutOrderDetailsComponent } from './add-service-booking-for-aopwithout-order-details.component';

describe('AddServiceBookingForAOPWithoutOrderDetailsComponent', () => {
  let component: AddServiceBookingForAOPWithoutOrderDetailsComponent;
  let fixture: ComponentFixture<AddServiceBookingForAOPWithoutOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBookingForAOPWithoutOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBookingForAOPWithoutOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
