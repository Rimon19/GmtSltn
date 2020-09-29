import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFabricBookingWithoutorderDetailsComponent } from './sample-fabric-booking-withoutorder-details.component';

describe('SampleFabricBookingWithoutorderDetailsComponent', () => {
  let component: SampleFabricBookingWithoutorderDetailsComponent;
  let fixture: ComponentFixture<SampleFabricBookingWithoutorderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFabricBookingWithoutorderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFabricBookingWithoutorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
