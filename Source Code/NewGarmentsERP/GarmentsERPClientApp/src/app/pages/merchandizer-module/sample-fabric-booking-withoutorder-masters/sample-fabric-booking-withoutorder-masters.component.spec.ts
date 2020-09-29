import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFabricBookingWithoutorderMastersComponent } from './sample-fabric-booking-withoutorder-masters.component';

describe('SampleFabricBookingWithoutorderMastersComponent', () => {
  let component: SampleFabricBookingWithoutorderMastersComponent;
  let fixture: ComponentFixture<SampleFabricBookingWithoutorderMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleFabricBookingWithoutorderMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFabricBookingWithoutorderMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
