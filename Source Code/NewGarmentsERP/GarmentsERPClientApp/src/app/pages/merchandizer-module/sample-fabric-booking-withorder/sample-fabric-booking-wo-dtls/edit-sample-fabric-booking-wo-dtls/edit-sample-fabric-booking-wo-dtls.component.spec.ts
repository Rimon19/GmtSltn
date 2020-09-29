import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSampleFabricBookingWoDtlsComponent } from './edit-sample-fabric-booking-wo-dtls.component';

describe('EditSampleFabricBookingWoDtlsComponent', () => {
  let component: EditSampleFabricBookingWoDtlsComponent;
  let fixture: ComponentFixture<EditSampleFabricBookingWoDtlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSampleFabricBookingWoDtlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSampleFabricBookingWoDtlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
