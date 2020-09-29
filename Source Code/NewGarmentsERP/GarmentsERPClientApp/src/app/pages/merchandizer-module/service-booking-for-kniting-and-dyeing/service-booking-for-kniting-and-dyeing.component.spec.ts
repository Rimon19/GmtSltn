import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingForKnitingAndDyeingComponent } from './service-booking-for-kniting-and-dyeing.component';

describe('ServiceBookingForKnitingAndDyeingComponent', () => {
  let component: ServiceBookingForKnitingAndDyeingComponent;
  let fixture: ComponentFixture<ServiceBookingForKnitingAndDyeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookingForKnitingAndDyeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingForKnitingAndDyeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
