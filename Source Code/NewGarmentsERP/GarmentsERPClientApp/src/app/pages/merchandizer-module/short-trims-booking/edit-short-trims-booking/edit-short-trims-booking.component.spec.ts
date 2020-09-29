import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditShortTrimsBookingComponent } from './edit-short-trims-booking.component';

describe('EditShortTrimsBookingComponent', () => {
  let component: EditShortTrimsBookingComponent;
  let fixture: ComponentFixture<EditShortTrimsBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditShortTrimsBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditShortTrimsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
