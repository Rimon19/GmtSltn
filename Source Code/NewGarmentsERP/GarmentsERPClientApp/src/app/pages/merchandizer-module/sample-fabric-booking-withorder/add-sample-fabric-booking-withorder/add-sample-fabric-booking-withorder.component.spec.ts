import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleFabricBookingWithorderComponent } from './add-sample-fabric-booking-withorder.component';

describe('AddSampleFabricBookingWithorderComponent', () => {
  let component: AddSampleFabricBookingWithorderComponent;
  let fixture: ComponentFixture<AddSampleFabricBookingWithorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleFabricBookingWithorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleFabricBookingWithorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
