import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBookingForKnitingDetailsComponent } from './add-service-booking-for-kniting-details.component';

describe('AddServiceBookingForKnitingDetailsComponent', () => {
  let component: AddServiceBookingForKnitingDetailsComponent;
  let fixture: ComponentFixture<AddServiceBookingForKnitingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBookingForKnitingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBookingForKnitingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
