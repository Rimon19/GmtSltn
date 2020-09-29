import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricServiceBookingComponent } from './fabric-service-booking.component';

describe('FabricServiceBookingComponent', () => {
  let component: FabricServiceBookingComponent;
  let fixture: ComponentFixture<FabricServiceBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FabricServiceBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricServiceBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
