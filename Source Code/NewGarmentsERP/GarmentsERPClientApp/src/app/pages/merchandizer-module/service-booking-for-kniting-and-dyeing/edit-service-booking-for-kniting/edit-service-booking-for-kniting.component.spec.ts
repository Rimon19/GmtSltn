import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditServiceBookingForKnitingComponent } from './edit-service-booking-for-kniting.component';

describe('EditServiceBookingForKnitingComponent', () => {
  let component: EditServiceBookingForKnitingComponent;
  let fixture: ComponentFixture<EditServiceBookingForKnitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditServiceBookingForKnitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditServiceBookingForKnitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
