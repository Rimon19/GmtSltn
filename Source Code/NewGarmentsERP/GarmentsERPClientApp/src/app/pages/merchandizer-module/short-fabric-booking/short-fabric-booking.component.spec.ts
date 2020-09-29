import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortFabricBookingComponent } from './short-fabric-booking.component';

describe('ShortFabricBookingComponent', () => {
  let component: ShortFabricBookingComponent;
  let fixture: ComponentFixture<ShortFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
