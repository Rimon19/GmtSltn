import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSampleFabricBookingComponent } from './add-sample-fabric-booking.component';

describe('AddSampleFabricBookingComponent', () => {
  let component: AddSampleFabricBookingComponent;
  let fixture: ComponentFixture<AddSampleFabricBookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSampleFabricBookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSampleFabricBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
