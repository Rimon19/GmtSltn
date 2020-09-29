import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleFabricBookingWithoutorderMastersComponent } from './add-sample-fabric-booking-withoutorder-masters.component';

describe('AddSampleFabricBookingWithoutorderMastersComponent', () => {
  let component: AddSampleFabricBookingWithoutorderMastersComponent;
  let fixture: ComponentFixture<AddSampleFabricBookingWithoutorderMastersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleFabricBookingWithoutorderMastersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleFabricBookingWithoutorderMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
