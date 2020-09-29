import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingForKnitingAndDyeingDetailsComponent } from './service-booking-for-kniting-and-dyeing-details.component';

describe('ServiceBookingForKnitingAndDyeingDetailsComponent', () => {
  let component: ServiceBookingForKnitingAndDyeingDetailsComponent;
  let fixture: ComponentFixture<ServiceBookingForKnitingAndDyeingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookingForKnitingAndDyeingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingForKnitingAndDyeingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
