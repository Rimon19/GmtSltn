import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBookingForAOPWithoutOrderComponent } from './add-service-booking-for-aopwithout-order.component';

describe('AddServiceBookingForAOPWithoutOrderComponent', () => {
  let component: AddServiceBookingForAOPWithoutOrderComponent;
  let fixture: ComponentFixture<AddServiceBookingForAOPWithoutOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBookingForAOPWithoutOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBookingForAOPWithoutOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
