import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortTrimsBookingComponent } from './short-trims-booking.component';

describe('ShortTrimsBookingComponent', () => {
  let component: ShortTrimsBookingComponent;
  let fixture: ComponentFixture<ShortTrimsBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortTrimsBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortTrimsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
