import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFabricBookingWithorderComponent } from './sample-fabric-booking-withorder.component';

describe('SampleFabricBookingWithorderComponent', () => {
  let component: SampleFabricBookingWithorderComponent;
  let fixture: ComponentFixture<SampleFabricBookingWithorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFabricBookingWithorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFabricBookingWithorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
