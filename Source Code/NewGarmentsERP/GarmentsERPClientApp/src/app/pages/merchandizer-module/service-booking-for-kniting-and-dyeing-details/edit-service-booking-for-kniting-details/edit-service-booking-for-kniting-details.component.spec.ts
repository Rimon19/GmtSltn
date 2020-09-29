import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceBookingForKnitingDetailsComponent } from './edit-service-booking-for-kniting-details.component';

describe('EditServiceBookingForKnitingDetailsComponent', () => {
  let component: EditServiceBookingForKnitingDetailsComponent;
  let fixture: ComponentFixture<EditServiceBookingForKnitingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceBookingForKnitingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceBookingForKnitingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
