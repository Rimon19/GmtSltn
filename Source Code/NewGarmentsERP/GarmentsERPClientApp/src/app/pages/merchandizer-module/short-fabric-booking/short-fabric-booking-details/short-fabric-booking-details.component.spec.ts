import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFabricBookingDetailsComponent } from './short-fabric-booking-details.component';

describe('ShortFabricBookingDetailsComponent', () => {
  let component: ShortFabricBookingDetailsComponent;
  let fixture: ComponentFixture<ShortFabricBookingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortFabricBookingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFabricBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
