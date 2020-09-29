import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceBookingForKnitingDetailComponent } from './service-booking-for-kniting-detail.component';

describe('ServiceBookingForKnitingDetailComponent', () => {
  let component: ServiceBookingForKnitingDetailComponent;
  let fixture: ComponentFixture<ServiceBookingForKnitingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceBookingForKnitingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceBookingForKnitingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
