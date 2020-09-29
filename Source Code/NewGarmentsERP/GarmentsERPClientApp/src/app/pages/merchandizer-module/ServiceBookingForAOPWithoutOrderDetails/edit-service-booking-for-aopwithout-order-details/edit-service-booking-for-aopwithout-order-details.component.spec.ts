import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceBookingForAOPWithoutOrderDetailsComponent } from './edit-service-booking-for-aopwithout-order-details.component';

describe('EditServiceBookingForAOPWithoutOrderDetailsComponent', () => {
  let component: EditServiceBookingForAOPWithoutOrderDetailsComponent;
  let fixture: ComponentFixture<EditServiceBookingForAOPWithoutOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceBookingForAOPWithoutOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceBookingForAOPWithoutOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
