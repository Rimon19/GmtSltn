import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceBookingForAOPWithoutOrderComponent } from './edit-service-booking-for-aopwithout-order.component';

describe('EditServiceBookingForAOPWithoutOrderComponent', () => {
  let component: EditServiceBookingForAOPWithoutOrderComponent;
  let fixture: ComponentFixture<EditServiceBookingForAOPWithoutOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceBookingForAOPWithoutOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceBookingForAOPWithoutOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
