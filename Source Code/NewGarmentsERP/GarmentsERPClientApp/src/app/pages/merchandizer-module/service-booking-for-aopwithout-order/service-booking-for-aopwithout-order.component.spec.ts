import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingForAOPWithoutOrderComponent } from './service-booking-for-aopwithout-order.component';

describe('ServiceBookingForAOPWithoutOrderComponent', () => {
  let component: ServiceBookingForAOPWithoutOrderComponent;
  let fixture: ComponentFixture<ServiceBookingForAOPWithoutOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookingForAOPWithoutOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingForAOPWithoutOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
