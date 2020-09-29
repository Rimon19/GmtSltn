import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFabricBookingComponent } from './sample-fabric-booking.component';

describe('SampleFabricBookingComponent', () => {
  let component: SampleFabricBookingComponent;
  let fixture: ComponentFixture<SampleFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
