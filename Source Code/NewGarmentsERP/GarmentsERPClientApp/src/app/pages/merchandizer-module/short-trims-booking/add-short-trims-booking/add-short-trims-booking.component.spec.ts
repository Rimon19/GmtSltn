import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShortTrimsBookingComponent } from './add-short-trims-booking.component';

describe('AddShortTrimsBookingComponent', () => {
  let component: AddShortTrimsBookingComponent;
  let fixture: ComponentFixture<AddShortTrimsBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShortTrimsBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShortTrimsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
