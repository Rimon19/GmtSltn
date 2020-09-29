import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleFabricBookingWithoutorderDetailsComponent } from './add-sample-fabric-booking-withoutorder-details.component';

describe('AddSampleFabricBookingWithoutorderDetailsComponent', () => {
  let component: AddSampleFabricBookingWithoutorderDetailsComponent;
  let fixture: ComponentFixture<AddSampleFabricBookingWithoutorderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleFabricBookingWithoutorderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleFabricBookingWithoutorderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
