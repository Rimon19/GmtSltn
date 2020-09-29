import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingForKnittingComponent } from './service-booking-for-knitting.component';

describe('ServiceBookingForKnittingComponent', () => {
  let component: ServiceBookingForKnittingComponent;
  let fixture: ComponentFixture<ServiceBookingForKnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookingForKnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingForKnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
