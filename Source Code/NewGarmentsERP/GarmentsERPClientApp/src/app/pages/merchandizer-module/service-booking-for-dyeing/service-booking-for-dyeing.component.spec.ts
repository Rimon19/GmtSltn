import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingForDyeingComponent } from './service-booking-for-dyeing.component';

describe('ServiceBookingForDyeingComponent', () => {
  let component: ServiceBookingForDyeingComponent;
  let fixture: ComponentFixture<ServiceBookingForDyeingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookingForDyeingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingForDyeingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
