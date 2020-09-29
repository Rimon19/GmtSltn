import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFabricBookingWoDtlsComponent } from './sample-fabric-booking-wo-dtls.component';

describe('SampleFabricBookingWoDtlsComponent', () => {
  let component: SampleFabricBookingWoDtlsComponent;
  let fixture: ComponentFixture<SampleFabricBookingWoDtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFabricBookingWoDtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFabricBookingWoDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
