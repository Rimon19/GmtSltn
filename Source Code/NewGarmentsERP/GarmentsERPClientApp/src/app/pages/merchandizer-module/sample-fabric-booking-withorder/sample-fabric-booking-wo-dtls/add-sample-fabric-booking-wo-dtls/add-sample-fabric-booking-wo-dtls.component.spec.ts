import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleFabricBookingWoDtlsComponent } from './add-sample-fabric-booking-wo-dtls.component';

describe('AddSampleFabricBookingWoDtlsComponent', () => {
  let component: AddSampleFabricBookingWoDtlsComponent;
  let fixture: ComponentFixture<AddSampleFabricBookingWoDtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleFabricBookingWoDtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleFabricBookingWoDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
