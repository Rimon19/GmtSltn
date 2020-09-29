import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServiceBookingForKnitingComponent } from './add-service-booking-for-kniting.component';

describe('AddServiceBookingForKnitingComponent', () => {
  let component: AddServiceBookingForKnitingComponent;
  let fixture: ComponentFixture<AddServiceBookingForKnitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServiceBookingForKnitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServiceBookingForKnitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
