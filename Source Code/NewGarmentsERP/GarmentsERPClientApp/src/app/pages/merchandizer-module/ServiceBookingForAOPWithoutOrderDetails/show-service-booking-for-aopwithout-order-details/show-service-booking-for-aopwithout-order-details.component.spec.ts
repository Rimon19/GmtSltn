import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowServiceBookingForAOPWithoutOrderDetailsComponent } from './show-service-booking-for-aopwithout-order-details.component';

describe('ShowServiceBookingForAOPWithoutOrderDetailsComponent', () => {
  let component: ShowServiceBookingForAOPWithoutOrderDetailsComponent;
  let fixture: ComponentFixture<ShowServiceBookingForAOPWithoutOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowServiceBookingForAOPWithoutOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowServiceBookingForAOPWithoutOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
