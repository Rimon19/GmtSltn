import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceBookingForKnittingComponent } from './edit-service-booking-for-knitting.component';

describe('EditServiceBookingForKnittingComponent', () => {
  let component: EditServiceBookingForKnittingComponent;
  let fixture: ComponentFixture<EditServiceBookingForKnittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceBookingForKnittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceBookingForKnittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
